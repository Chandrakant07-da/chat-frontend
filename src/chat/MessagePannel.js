import Message from "./Massage"
const MessagePanel = () => {
     return(
          <>
               <div className="message-pannel">
                    <div className="message-list">
                         <Message/>
                    </div>
                    <div className="message-input">
                         <input type="text" />
                         <button>Send</button>
                    </div>
               </div>
          </>
         
     )
}
export default MessagePanel