## Environment:
<b>
angular/cli 19.0.6 <br>
npm 11.0.0 <br> <br>

ng new apolloExample

ng add apollo-angular
npm install graphql-ws

npm i graphql <br>
npm i -D typescript <br>
npm i -D @graphql-codegen/cli <br>
npm i -D @graphql-codegen/typescript <br>
npm i -D @graphql-codegen/typescript-operations <br>
npm i -D @graphql-codegen/typescript-apollo-angular <br>

added to package.json: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prestart": "graphql-code-generator --config ./src/app/graphql/codegen.ts"
   
npm start
</b>
---------------------------------------------------------------------------------------------

## ApolloError: The current user is not authorized to access this resource.
## Server Error: Connection rejected: Authorization header is missing.


<b>Headers recieved on the graphql server:

Subscription Headers: <br>
Connection: Upgrade <br>
Host: localhost:5179 <br>
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 <br>
Accept-Encoding: gzip, deflate, br, zstd <br>
Accept-Language: he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7 <br>
Cache-Control: no-cache <br>
Origin: http://localhost:4200 <br>
Pragma: no-cache <br>
Upgrade: websocket <br>
Sec-WebSocket-Version: 13 <br>
Sec-WebSocket-Key: pby794Rto+bg2+shuU2/WA== <br>
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits <br>
Sec-WebSocket-Protocol: graphql-transport-ws <br></b>
