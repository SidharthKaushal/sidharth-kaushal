import { cn } from "../lib/utils";

export const TestimonialItem = ({ testimonial, index, hovered, setHovered }) => {
  return (
    <li
      key={`testimonial-${index}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl px-5 pb-7 pt-3 h-[430px] w-96 relative transition-all duration-300 bg-light",
        hovered !== null && hovered !== index && "blur-[3px] scale-[0.95]"
      )}
    >
      {testimonial.messages.map((message, msgIndex) => {
        const isMessageArray = Array.isArray(message.userMessage);
        const isReceiver = message.tag === "reciver";

        return (
          <div
            key={msgIndex}
            className={cn(
              "w-full flex flex-col",
              isReceiver ? "items-end text-end" : "items-start text-start"
            )}
          >
            <p className="mb-2 mt-4 capitalize font-primary">
              {message.userName}
            </p>

            {isMessageArray ? (
              <div
                className={cn(
                  "flex flex-col gap-3",
                  isReceiver ? "items-end" : "items-start"
                )}
              >
                {message.userMessage.map((msg, msgIdx) => {
                  const isLast = msgIdx === message.userMessage.length - 1;
                  return (
                    <div
                      key={msgIdx}
                      className={cn(
                        "rounded-xl p-3 duration-300 max-w-[80%] bg-light-dark relative",
                        isLast && (isReceiver ? "chat-left" : "chat-right")
                      )}
                    >
                      {msg}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className={cn(
                  "rounded-xl p-3 duration-300 max-w-[80%] bg-light-dark relative",
                  isReceiver ? "chat-left" : "chat-right"
                )}
              >
                {message.userMessage}
              </div>
            )}
          </div>
        );
      })}
    </li>
  );
};
