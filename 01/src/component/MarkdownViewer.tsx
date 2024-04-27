import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownViewerProps {
  filePath: string;
  cls?: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filePath, cls }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error('Error loading Markdown file:', error);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div className={cls}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
