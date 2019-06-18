 handleSubmit = async event => {
        event.preventDefault();

        try {

         fetch('https://bench-api.applover.pl/api/v1/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Host': 'example.org',
                    'Cookie': ''
                },
                body: JSON.stringify({
                    "email": "login@applover.pl",
                    "password": "password123"
                })
                }).then((response) => response.json()).then((responseJson) => {
                    return console.log(responseJson.info);
                  });
          alert("Logged in");
        } catch (e) {
          alert(e.message);
        }
    }

    userAction = async () => {
        const response = await fetch('https://bench-api.applover.pl/api/v1/login', {
          method: 'POST',
          body: {
            "email": "login@applover.pl",
            "password": "password123"
          },
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Host': 'example.org',
            'Cookie': ''
          }
        });

        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson

        if (response.status >= 200 && response.status < 400) {
            console.log(myJson);
          } else {
            console.log('error')
          }
      }