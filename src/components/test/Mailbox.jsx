export default function Mailbox ({username, messages}) {
    return (
        <>
        <p>Hello {username}</p>
        {messages.length > 0 && (
        <p>You have {messages.length} unread messages</p>
      )}
        </>
    );
};
/*
export default function Mailbox ({username, messages}) {
    return (
        <>
        <p>Hello {username}</p>
        {messages.length > 0 ? (
            <div>
                <p>You have {messages.length} unread messages</p>
                <MessageList messages={messages}/>
            </div>
        ) : (
            <p>No unread messages</p>
        )}
            </>
    );
};
Тут потрібен ще компонент MessageList
*/