export default function Mailbox2({name, unreadMessages}){
    return(
        <div>
      <p>Hello {name}</p>
      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>
    </div>
    );
};