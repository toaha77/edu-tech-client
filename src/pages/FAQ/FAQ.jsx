  
 const FAQ = () => {
    return (
        <div>
            <div>

                <h3 className="text-3xl text-center mb-4">
                Frequently <span className="text-red-500">Asked Questions</span>
                </h3>
            </div>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title   font-bold text-2xl">
  How can I join a study room?
  </div>
  <div className="collapse-content"> 
    <p>You currently only need a Zoom account to be able to join our study rooms. Simply click on the button on our website or here and enter your Zoom credentials. You will then be taken to the Zoom app directly or you can join our room via your browser. (it might be that you have some functionality missing by joining from your browser though).

Once in the study room, you can change your name, the layout on how to see the other learners and decide if you would like to share your video via webcam). Thats it! You can now start to study.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title   font-bold text-2xl">
  I am here for the first time. What should I do?
  </div>
  <div className="collapse-content"> 
    <p>Hey, welcome to our community! We are happy that you are part of it now. When you join a study room we advise you to follow these steps: <br />
‍

   <span className="mt-2">
   - It's totally up to you if you want to leave the camera on or off. If you leave it on, you can either show yourself studying or your notebook/desk. <br />
   </span>
   <span className="mt-2">
    - You can also change your profile name 🧑🏽 on zoom (e.g. by showing the subject you are working on or the country you are from). <br />
   </span>
   <span className="mt-2">
  - Please note that sound 🔈 and the chat function are disabled by default to allow a quiet and nice working atmosphere for everyone in the call. <br />
   </span>
   <span className="mt-2">
   - You will also find a study timer ⏲️ and an infoboard with the upcoming events and news. Don’t forget to check it and don’t miss out!
   </span>
  </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-2xl font-bold">
  I would like to join. How do I do that?  </div>
  <div className="collapse-content"> 
    <p>Perfect, you are welcome in the community! Great that you are giving it a shot. We currently offer study rooms accessed directly from our website using Zoom and also a Discord Server with different study channels. You can join them here: zoom or Discord (it is up to you if you want to try both or just one of the options). Should you have any questions after joining, feel free to drop us an email at help@edutech.com or write one of the moderators in the chat 💬.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-2xl font-bold">
  Are there any regular events or rooms for group discussions, etc?
  </div>
  <div className="collapse-content"> 
    <p>Yes! By being part of the community you will have access to a variety of events, from 🧘mindfulness sessions to 📚 study tips bootcamps. You can find the events list on our website , and on the info board shown on the study calls. You can also follow our social media, join our Telegram group or subscribe to our newsletter. All events are for free 🥳</p>
  </div>
</div>
        </div>
    );
 };
 
 export default FAQ;