     
     var refresh_website = function () {
            if ($window.applicationCache.status == 1 || $window.applicationCache.status > 3) {
                try {
                    $window.applicationCache.swapCache();
                }catch(ex)
                {

                }
            }

            $window.location.reload();
            bootstrapper.reset();
            $location.path("/");
            $route.reload();


        };

        var refreshPageIfNewVersion = function()
        {
            console.log('Check version');
            var saved_version=$window.localStorage.getItem('application-version');
           try {
               if (saved_version != VERSION_NUMBER) {
                   console.log('New version detect '+VERSION_NUMBER+'- auto refresh browser cache of old version: '+saved_version);
                   $window.localStorage.setItem('application-version', VERSION_NUMBER);

                   refresh_website();
               }
               else {
                   console.log('Latest version detect: ' + saved_version);
               }
           }catch(ex)
           {
               console.log('Problem with auto refresh browser cache : ' + VERSION_NUMBER);
           }

        }


        var main = (function()
        {
          refreshPageIfNewVersion();

        })();  