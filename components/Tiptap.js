import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration';
import * as Y from 'yjs'
import Menu from './Menu';
import styles from '../styles/Tiptap.module.css';
import { WebrtcProvider } from 'y-webrtc';

const ydoc = new Y.Doc();

const provider = new WebrtcProvider("tiptap-test", ydoc)

const websocketProvider = new HocuspocusProvider({
  url: 'ws://127.0.0.1:1234',
  parameters: {
    key: 'write_bqgvQ3Zwl34V4Nxt43zR',
  },
  name: 1,
  document: ydoc,
})

const Tiptap = ({user}) => {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Collaboration.configure({
        document: ydoc
      }),
      CollaborationCursor.configure({
        provider: websocketProvider,
        user: {
          name: user.userName,
          color: user.color
        },
        name: 'tip-tap',
      })
    ],
  })

  return (
    <div className={styles.textEditor}>
      <Menu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap;