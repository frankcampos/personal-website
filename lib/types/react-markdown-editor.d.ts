declare module '@uiw/react-markdown-editor' {
    import React from 'react';
  
    export interface MarkdownEditorProps {
      value?: string;
      height?: string;
      onChange?: (value: string) => void;
      className?: string;
    }
  
    const MarkdownEditor: React.FC<MarkdownEditorProps>;
  
    export default MarkdownEditor;
  }
  