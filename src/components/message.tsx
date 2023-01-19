interface MessageProps {
  lastUpdated: string;
  text: string;
}

export const Message = ({ lastUpdated, text }: MessageProps) => {
  return (
    <div className="mb-3">
      <p data-testid="message-last-updated">{lastUpdated}</p>
      <p>{text}</p>
    </div>
  );
};
