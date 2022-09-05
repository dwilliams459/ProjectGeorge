    let pause = 0

    //var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL}); ${s}`);

    let term;
    jQuery(function($, undefined) {
        $('#term-box').terminal(function(command) {
            cat: {
                this.echo("my cat");
            }
            if (command !== '') {
                try {
                    var result = George(command);
                    // if (result !== undefined) {
                    //     this.echo(new String(result));
                    // }
                } catch(e) {
                    this.error(new String(e));
                }
            } else {
               this.echo('');
               this.scroll_to_bottom();
            }
        }, {
            greetings: 'Hello there!',
            name: 'js_demo',
            height: 400,
            width: 600,
            prompt: '> '
        });
        term = $('#term-box').terminal();
    });

    // Not really working.  Look at https://www.sitepoint.com/delay-sleep-pause-wait/
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    // Use this veriable to keep track of where a user is in the flow.
    // Value could be anything such as 'start', 'saidHello', 'done', 1, 2, 3...  etc.
    let userStatus = "start";

    function George(command)
    {
        // From here, reference this to look for terminal commands (Instance Methods section): https://terminal.jcubic.pl/api_reference.php#instance_methods
        term.echo('You said: ' + command);

        term.echo("Hello"); //console.log("Hello");
        term.pause();
        setTimeout(() => { nextThing() }, 5000);

        command = command.toLowerCase();

        term.scroll_to_bottom();
    }

    function nextThing() {
        term.echo("Goodby.");
        term.resume();
    }
