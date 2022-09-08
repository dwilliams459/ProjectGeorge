// Use this veriable to keep track of where a user is in the flow.
// Value could be anything such as 'start', 'saidHello', 'done', 1, 2, 3...  etc.
var userStatus = "start";   // <<<<<<<<<<
var terminal;

jQuery(function ($, undefined) {
    $('#term-box').terminal(function (command) {
        // cat: {
        //     this.echo("my cat");
        // }
        if (command !== '') {
            try {
                var result = George(command);
                // if (result !== undefined) {
                //     this.echo(new String(result));
                // }
            } catch (e) {
                this.error(new String(e));
            }
        } else {
            this.echo('');
            this.scroll_to_bottom();
        }
    }, {
        greetings: 'Hello?',
        name: 'js_demo',
        height: 400,
        width: 600,
        prompt: '> '
    });
    terminal = $('#term-box').terminal();
    userStatus = "start";
    startGeorge();
});

// Not really working.  Look at https://www.sitepoint.com/delay-sleep-pause-wait/
function sleepOld(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// From here, reference this to look for terminal commands (Instance Methods section): https://terminal.jcubic.pl/api_reference.php#instance_methods

// Start of application
function startGeorge() {
    terminal.echo("I am George");
    terminal.echo("Who are you?");

  /*  terminal.pause();
    sleep(2000).then(() => {
        terminal.echo("test 3");
        sleep(2000).then(() => {
            terminal.echo("test 4");
            terminal.resume();
        })
    }); */
}

function George(command) {
    command = command.toLowerCase();

    if (userStatus === 'start') {
        if (command != '');
        terminal.echo("It's nice to meet you," (command));
        userStatus = 'saidName'
    }

/*    if (userStatus === 'start') {
            if (command === 'hello') {
            terminal.echo('test 5');
            userStatus = 'saidhello';
        }
    } else if (userStatus === 'saidhello') {
        terminal.echo('test 6');
        branch1(command);
    }
} */

function branch1(command) {
    terminal.echo('test 7');
}