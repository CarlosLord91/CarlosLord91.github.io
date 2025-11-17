# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:
My Partner's Key:

Our initial shared key:

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|                 |                 |     |
|                 |                 |     |
|                 |                 |     |
|                 |                 |     |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Carlos Ayala Tobar]
    Destination: [Cole]  
    Sequence: 1/3
    Data: [01010100] [01101000]
    =========
    Packet 2:

    Source: [Carlos Ayala Toabr]
    Destination: [Cole]
    Sequence: 2/3 
    Data: [01100101] [00001000]
    =========
    Packet 3:

    Source: [Carlos Ayala Tobar]
    Destination: [Cole]
    Sequence: 3/3
    Data: [01010111] [0110111]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption?symmetric uses the same key to encrypt and decrypt messages and asymmetric uses a publuc key to encrypt and a private key to decrypt What purpose did each serve in this simulation?aysmmetric encryption was when we sent eachothers messages and used our keys to decrypt it. symmetric was used when we decprypted our encrpted words we shifted.
- Why is it important that this protocol uses a new key for each message?because if not its really easy to decrypt
- Why is it important that you never share your secret key?because then people can accses your key to decrypt information that is for you.
- In the transport layer, do these messages use TCP or UDP? Why? Tcp because it is reliable,ordered, and is error checked.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.The internet layer makes sure it is directed in the right derection. The link layer deals with the transmission over hardware and checks for errors.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
