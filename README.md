# Automatisation process of refreshing storage and cache in browser on client side in case of deployment new version



## Main Objectives
Many times in case of released new changes on client side functionality in javascript files, browser on client side needs refresh stored old java script files and refresh content by new one.. This situation causes a lot of issues / problems:
1. user in case of publishing new java script files has to refresh browser, what causes interactions from company side to inform users to perform this operation
2. sometimes soft refresh (by using F5) of cached resources is not enough and user needs use hard refresh by using ctrl+r , command+r or from menu browser side

We can automatise this process by monitoring released versions of client java script files to perform hard refresh local storage without client interaction – process is realised automatically in background without knowladge and involved of client. Below I present very good solution that works on production enviroments and works perfect. Presented solution is used on angular side. One thing what You have to do that it’s place in correct start up place  of source code on Your side call refreshPageIfNewVersion() function, where You compare retrieved version from server side with storaged version placed on client side in local storage

article from http://maxprog.net.pl/total-js/refreshing-storage-and-cache-in-browser-on-client-side-in-case-of-deployment-new-version/