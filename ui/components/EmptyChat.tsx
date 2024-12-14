import { useState } from 'react';
import EmptyChatMessageInput from './EmptyChatMessageInput';
import image from '../public/apple-touch-icon.png';
import { Pencil, BookText, Search } from 'lucide-react';

const focusModes = [
  {
    key: 'writingAssistant',
    title: 'SOP Analyzer',
    description: 'Analyze your SOP',
    icon: <Pencil size={20} />,
  },
  {
    key: 'wolframAlphaSearch',
    title: 'Resume Analyzer',
    description: 'Analyze your Resume',
    icon: <BookText size={20} />,
  },
  {
    key: 'redditSearch',
    title: 'College Finder',
    description: 'Helps Find right Colleges and Courses',
    icon: <Search size={20} />,
  },
];

const EmptyChat = ({
  sendMessage,
  focusMode,
  setFocusMode,
}: {
  sendMessage: (message: string) => void;
  focusMode: string;
  setFocusMode: (mode: string) => void;
}) => {
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);

  const handleFocusSelect = (focus: string) => {
    setFocusMode(focus);
    setSelectedFocus(focus);
  };

  return (
    <div className="relative">
      {selectedFocus === null ? (
        // Focus Selection Page
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
          {/* Company logo above the "Choose Your Focus" heading */}
          <img src={image.src} alt="Company Logo" className="w-24 h-20 mb-4" />
          <h1 className="text-3xl font-bold">
            <span style={{ background: 'linear-gradient(to right, #FFD700, #FFFFFF, #FD7217)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Choose Your Focus
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusModes.map((mode) => (
              <div
                key={mode.key}
                onClick={() => handleFocusSelect(mode.key)}
                className="p-4 border rounded-lg hover:shadow-lg cursor-pointer flex flex-col items-center space-y-4"
              >
                {mode.icon}
                {/* Apply gradient color to each box heading */}
                <h2 className="text-xl font-semibold">
                  <span style={{ background: 'linear-gradient(to right, #FFD700, #FFFFFF, #FD7217)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    {mode.title}
                  </span>
                </h2>
                <p className="text-sm text-center">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Main Chat Page
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-sm mx-auto p-2 space-y-8">
          <header className="flex flex-col items-center p-4 space-y-2">
            <img src={image.src} alt="Company Logo" className="w-24 h-20" />
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: '#fd7217' }}>Konect U</h1>
          </header>

          <h2 className="text-black/70 dark:text-white/70 text-3xl font-medium -mt-8">
            HEY THERE, I AM NALANDA
          </h2>
          <EmptyChatMessageInput
            sendMessage={sendMessage}
            focusMode={focusMode}
            setFocusMode={setFocusMode}
          />
        </div>
      )}
    </div>
  );
};

export default EmptyChat;
