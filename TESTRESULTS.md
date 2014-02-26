/* BELOW ARE RESULTS FROM SOCKET.IO UPSTREAM AS OF FEB 24 2014 */

Test results from localhost, 10 back-and-forth doges:

took 134 ms to send and receive doge image
took 27 ms to send and receive doge image
took 8 ms to send and receive doge image
took 7 ms to send and receive doge image
took 6 ms to send and receive doge image
took 6 ms to send and receive doge image
took 6 ms to send and receive doge image
took 5 ms to send and receive doge image
took 5 ms to send and receive doge image
took 24 ms to send and receive doge image
average time to send and receive: 22.8 ms

From localtunnel:

took 752 ms to send and receive doge image
took 364 ms to send and receive doge image
took 373 ms to send and receive doge image
took 362 ms to send and receive doge image
took 373 ms to send and receive doge image
took 479 ms to send and receive doge image
took 409 ms to send and receive doge image
took 395 ms to send and receive doge image
took 386 ms to send and receive doge image
took 355 ms to send and receive doge image
average time to send and receive: 424.8 ms

From localtunnel and linux VM:

took 617 ms to send and receive doge image
took 479 ms to send and receive doge image
took 381 ms to send and receive doge image
took 430 ms to send and receive doge image
took 424 ms to send and receive doge image
took 394 ms to send and receive doge image
took 413 ms to send and receive doge image
took 416 ms to send and receive doge image
took 448 ms to send and receive doge image
took 435 ms to send and receive doge image
average time to send and receive: 443.7 ms

/* BELOW ARE RESULTS FROM SOCKET.IO FIX/BUILD-SIZE USING JSON-BUFF */

From localtunnel:

took 140 ms to send and receive doge image
took 58 ms to send and receive doge image
took 63 ms to send and receive doge image
took 71 ms to send and receive doge image
took 50 ms to send and receive doge image
took 46 ms to send and receive doge image
took 44 ms to send and receive doge image
took 66 ms to send and receive doge image
took 42 ms to send and receive doge image
took 64 ms to send and receive doge image
average time to send and receive: 64.4 ms

/* AS SHOULD BE EVIDENT, MSGPACK SEEMS QUITE BAD */

/* BELOW ARE RESULTS FROM SOCKET.IO ADD/BETTER-BINARY-EVENTS */

From localtunnel:

took 275 ms to send and receive doge image
took 84 ms to send and receive doge image
took 79 ms to send and receive doge image
took 74 ms to send and receive doge image
took 107 ms to send and receive doge image
took 108 ms to send and receive doge image
took 112 ms to send and receive doge image
took 75 ms to send and receive doge image
took 85 ms to send and receive doge image
took 85 ms to send and receive doge image
average time to send and receive: 108.4 ms
