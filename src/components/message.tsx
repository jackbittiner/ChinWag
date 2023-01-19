interface MessageProps {
  lastUpdated: string;
  text: string;
}

export const Message = ({ lastUpdated, text }: MessageProps) => {
  return (
    <div className="mb-3">
      <p className="font-light text-gray-500 dark:text-gray-400 text-xl	">
        {lastUpdated}
      </p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">
        {text}
      </p>
    </div>
  );
};
