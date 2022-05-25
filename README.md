# delete_chats
Deleting a chat of a particular number or array of numbers. The webhook will take the input (wa_id) of all the incoming chats and search for blocked number array. Incase it finds the number in the blocked number array then it will delete all the chats instanteously. 

## REMEMBER : You cannot recover the deleted chats in future unless you have taken a backup of all chats at your end. 

# .env file
- Add TURN_TOKEN in .env file along with the PORT. TURN_TOKEN can be generated from Turn interface >>Settings>>API/WEbhooks >>Create token.
- Remember, the turn_token has an expiration date. Make sure that you are using a valid token

The URL endpoint of this webhook has to be added in Turn interface >>Settings>>API/WEbhooks >>Add webhook. 
