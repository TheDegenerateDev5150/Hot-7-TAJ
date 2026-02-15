DMessage("pthev_Mod12AnalPlay: start");
main();
DMessage("pthev_Mod12AnalPlay: end");
function main()
{
	if(getVar("pthev_Mod12AnalPlay_guessed_it",false) ){
		delVar("pthev_Mod12AnalPlay_guessed_it");
		guessed_it();
		return;
	}
	if(getVar("pthev_Mod12AnalPlay_GoOn",false)){
		pthev_Mod12AnalPlay_GoOn();
		return;
	}
    if(getVar("pthevMod12Skip", false))
    {
        pthevMod12Skip();
        return;
    }
    setTempVar("pthevMod12Skip", true);
    if(getVar("pthevAnal", false))
    {
        pthevAnal();
        return;
    }
    if(getVar("pthevNoAnal", false))
    {
        pthevNoAnal();
        return;
    }
    edge("%Edge%");
    CMessage("We pay a lot of attention to your %Cock% don\'t we");
    CMessage("But there are other things we can do to deepen the ache in your %Balls%");
    CMessage("Other... parts of the body to explore");
    let answer0 = getInput("Would you like that?");
    if (answer0.isLike("yes"))
    {
        CMessage("Good %EmoteHappy% You must be wondering what I\'m thinking of now");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You haven\'t even heard what I have in mind... %Grin%");
    }
    else if (answer0.isLike("what", "mind", "it", "mean", "understand"))
    {
        CMessage("Oh you\'ll find out soon enough %Grin%");
    }
    else if (answer0.isLike("sure", "know"))
    {
        CMessage("You could be a little more trusting %SubName% %Smile%");
    }
    else if (answer0.isLike("anal", "play", "dildo", "plug", "butt", "ass"))
    {
        CMessage("That\'s amazing, you read my mind!");
        guessed_it();
        return;
    }
    else
    {
        CMessage("You must be wondering what I have in mind");
    }
    let answer1 = getInput("Does the uncertainty make you nervous, maybe even a little scared?");
    if (answer1.isLike("yes"))
    {
        CMessage("I like it when you\'re a little scared %Grin%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("I guess there\'s probably no need to be nervous");
        //--UNINTERPRETED LINE:[nervous] You probably <i>should</i> be a little nervous %Grin%
    }
	else if (answer1.isLike("nervous"))
    {
        CMessage("You probably <i>should</i> be a little nervous %Grin%");
    }
    else if (answer1.isLike("scared"))
    {
        CMessage("Aww poor %PetName% %Grin%");
    }
    else
    {
        CMessage("There\'s probably no need to be nervous");
    }
    let answer2 = getInput("Want to guess what it is that I want you to do?");
    while (!(answer2.isLike("no") || answer2.isLike("tell me") || answer2.isLike("don't want") || answer2.isLike("don't like") || answer2.isLike("don't know") || answer2.isLike("what is it") || answer2.isLike("give up") || answer2.isLike("say it") || answer2.isLike("anal") || answer2.isLike("ass play") || answer2.isLike("dildo") || answer2.isLike("plug") || answer2.isLike("butt") || answer2.isLike("ass")))
    {
		if (answer2.isLike("yes", "sure", "okay", "think", "allright"))
		{
			answer2 = getInput("So what do you think?");
			//--Command:LoopAnswer
		}
		else{
			answer2 = getInput("Nope, try again");
		}
    }
    if (answer2.isLike("no","tell me","don't want","don't like","don't know","what is it","give up","say it"))
    {
    }
    else if (answer2.isLike("anal", "ass play", "dildo", "plug", "butt", "ass"))
    {
        CMessage("Bingo!");
        guessed_it();
        return;
    }
    CMessage("%SubName%...");
    guessed_it();
}
function guessed_it()
{
    let answer0 = getInput("Have you ever done anal play before?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Have you done it or not?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("So you\'re a real anal slut already, hm? %Laugh%");
        doneitbefore();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Okay, no problem %Smile%");
    }
    let answer1 = getInput("First time for everything, right?", 8);
    if (answer1.isTimeout())
    {
        notdoneitbefore();
        return;
    }
    if (answer1.isLike("yes", "i guess", "true"))
    {
        CMessage("Glad you agree %Smile%");
        notdoneitbefore();
        return;
    }
    else if (answer1.isLike("no", "don't want", "please don't"))
    {
        CMessage("Come on, %SubName% don\'t be a sissy...");
    }
	else if (answer1.isLike("you want","that's what you want"))
    {
        CMessage("That <i>is</i> what I want %Smile%");
        notdoneitbefore();
        return;
    }
    else if (answer1.isLike("for you"))
    {
        CMessage("Aw that\'s so sweet %Laugh%");
        notdoneitbefore();
        return;
    }
    else if (answer1.isLike("if you say so"))
    {
        CMessage("I say so %Smile%");
        notdoneitbefore();
        return;
    }
	else{
		CMessage("Is anal play something you'd like to try?");
	}
    some_other_time();
	return;
}
function some_other_time()
{
    CMessage("Or in this case, <i>be</i> a sissy %Laugh%");
    let answer0 = getInput("You do want to make me happy, don\'t you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("don't") || answer0.isLike("do not") || answer0.isLike("won't") || answer0.isLike("will not")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good, then you\'ll do as I say");
        notdoneitbefore();
        return;
    }
    else if (answer0.isLike("no","don't","do not","won't","will not"))
    {
        CMessage("You\'re such a spoilsport... %EmoteSad%");
    }
    CMessage("Well, maybe some other time...");
    setVar("pthevNoAnal", true);
    delVar("pthevAnal");
    CMessage("I do hope you\'ll reconsider %Smile%");
    return;
    notdoneitbefore();
}
function notdoneitbefore()
{
    setTempVar("pthevAnalFirstTimer", true);
    CMessage("Since this is your first time, I want to go over a couple of things");
    CMessage("This might be stating the obvious, but if you want to continue...");
    CMessage("You should be clean... and I mean <i>clean</i>");
    CMessage("Not that you need to have an enema, you\'re not going pro... yet... %Laugh%");
    CMessage("But you should at least use the toilet and take a shower before going further");
    CMessage("You know, soap up that asshole, maybe play with it a little to get used to the feeling %Smile%");
    let answer0 = getInput("Would you like to go take a shower right now?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Alright, but don\'t take too long!");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Okay...");
        still_want_to_continue();
        return;
    }
    let answer1 = getInput("Just let me know when you\'re ready...");
    while (!(answer1.isLike("ready") || answer1.isLike("done") || answer1.isLike("finished")))
    {
        answer1 = getInput("Let me know when you\'re ready");
    }
    if (answer1.isLike("ready", "done", "finished"))
    {
        CMessage("Good, I hope you\'re all squeaky clean now");
    }
    CMessage("So tell me, %SubName%");
    doneitbefore();
    return;
    still_want_to_continue();
}
function still_want_to_continue()
{
    let answer0 = getInput("But you still want to continue, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m just going to assume you\'re all fresh and clean then %Smile%");
        doneitbefore();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh...");
    }
    CMessage("Well, maybe some other time...");
    setVar("pthevNoAnal", true);
    delVar("pthevAnal");
    CMessage("I do hope you\'ll reconsider %Smile%");
    return;
    doneitbefore();
}
function doneitbefore()
{
    let answer0 = getInput("Do you have a dildo or butt plug, or both?");
    while (!(answer0.isLike("no") || answer0.isLike("neither") || answer0.isLike("dildo") || answer0.isLike("plug") || answer0.isLike("both")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("which one?");
			//--Command:LoopAnswer
		}
		else {
			answer0 = getInput("That\'s very interesting, but do you own a dildo or butt plug?");
		}
    }
     if (answer0.isLike("no", "neither"))
    {
        CMessage("That\'s too bad");
        does_not_own_dildo();
        return;
    }
    else if (answer0.isLike("dildo"))
    {
        CMessage("Awesome!");
        setVar("pthevDildo", true);
    }
    else if (answer0.isLike("plug"))
    {
        CMessage("Great!");
        setVar("pthevButtPlug", true);
    }
    else if (answer0.isLike("both"))
    {
        CMessage("I was hoping you\'d say that!");
        setVar("pthevDildo", true);
        setVar("pthevButtPlug", true);
    }
    how_about_it();
	return;
}
function how_about_it()
{
    let answer0 = getInput("So how about it, will you take it up the ass for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
        saidyes();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s okay, I don\'t want to force you to do it");
    }
    CMessage("It\'s too bad though");
    showTaggedImage(4, ["ANAL"]);
    //--Command:TagAnalSex
    lockImages();
    CMessage("Your porn collection seems to suggest you\'re into it");
    showTaggedImage(4, ["ANAL"]);
    let answer1 = getInput("Are you sure about this?");
    showTaggedImage(4, ["ANAL"]);
    unlockImages();
    while (!(answer1.isLike("yes") || answer1.isLike("sure") || answer1.isLike("no") || answer1.isLike("sure") || answer1.isLike("know")))
    {
        answer1 = getInput("Do you want to move on to something else?");
    }
    if (answer1.isLike("yes", "sure"))
    {
        CMessage("Alright then %EmoteSad%");
        some_other_time();
        return;
    }
    else if (answer1.isLike("no", "sure", "know"))
    {
        CMessage("Those images looked pretty good eh? %Grin%");
        how_about_it();
        return;
    }
    CMessage("I\'ll ease you into it %SubName%");
    saidyes();
	return;
}
function saidyes()
{
    setVar("pthevAnal", true);
    delVar("pthevNoAnal");
    if(getVar("pthevDildo", false))
    {
        CMessage("Let\'s play with that dildo %Name%");
        go_get_dildo();
        return;
    }
    if(getVar("pthevButtPlug", false))
    {
        CMessage("I do wish you had a dildo too");
    }
    CMessage("Maybe you will someday...");
    CMessage("But it\'s good to know you have a plug");
    CMessage("I\'m sure I\'ll find a way to put it to use %Grin%");
    CMessage("But not now");
    return;
    does_not_own_dildo();
}
function does_not_own_dildo()
{
    let answer0 = getInput("Do you have something with a similar shape you could use?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("like what") || answer0.isLike("don't know") || answer0.isLike("not sure") || answer0.isLike("example") || answer0.isLike("what do you mean") || answer0.isLike("changed my mind") || answer0.isLike("don't want") || answer0.isLike("don't make me")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Great! I\'m not sure I want to know what it is though %Lol%");
        gogetitthen();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Never mind then");
        nothingavailable();
        return;
    }
    else if (answer0.isLike("like what","don't know","not sure","example","what do you mean"))
    {
        CMessage("Well, anything shaped like an erect cock will do...");
    }
    else if (answer0.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("%EmoteSad%");
        some_other_time();
        return;
    }
    CMessage("You do know what a cock looks like right? %Smile%");
    let answer1 = getInput("So do you have something you can use?");
    while (!(answer1.isLike("yes") || answer1.isLike("no") || answer0.isLike("changed my mind") || answer0.isLike("don't want") || answer0.isLike("don't make me")))
    {
        answer1 = getInput("Yes or no?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Great! I\'m not sure I want to know what it is though %Lol%");
        gogetitthen();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Hmm then it no use I guess");
        nothingavailable();
        return;
    }
    else if (answer0.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("Alright then... %EmoteSad%");
        some_other_time();
        return;
    }
    gogetitthen();
	return;
}
function gogetitthen()
{
    let answer0 = getInput("Go get it, let me know when you\'re ready");
    while (!(answer0.isLike("yes") || answer0.isLike("back") || answer0.isLike("returned") || answer0.isLike("here") || answer0.isLike("got it") || answer0.isLike("ready") || answer0.isLike("don't have") || answer0.isLike("haven't got") || answer0.isLike("couldn't find") || answer0.isLike("haven't found") || answer0.isLike("changed my mind") || answer0.isLike("don't want") || answer0.isLike("don't make me") ))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Go get your dildo-shaped something %PetName%!");
		}
		else if (answer0.isLike("don't like it","don't like this"))
		{
			answer0 = getInput("You don\'t have to like, you\'re doing it for me remember %EmoteHappy%");
		}
		else if (answer0.isLike("wait", "sec", "second", "moment", "hold on", "not ready"))
		{
			answer0 = getInput("I\'ll wait");
		}else{
			answer0 = getInput("Are you ready?");
		}
    }
    if (answer0.isLike("yes", "back", "returned", "here", "got it", "ready"))
    {
        CMessage("This is going to be interesting %Grin%");
    }
    else if (answer0.isLike("don't have","haven't got","couldn't find","haven't found"))
    {
        CMessage("Oh well, maybe next time %EmoteSad%");
        nothingavailable();
        return;
    }
    else if (answer0.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("Alright then... %EmoteSad%");
        some_other_time();
        return;
    }
    else 
    CMessage("Before we get started...");
    setVar("pthevAnalOther", true);
    edge("%Edge%");
    CMessage("Here\'s some inspiration");
    showTaggedImage(4, ["ANAL"]);
    lockImages();
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ANAL"]);
	sleep(2);
    showTaggedImage(4, ["ANAL"]);
    edge("%Edge%");
    unlockImages();
    CMessage("I\'m going to regret asking, but I\'m going to anyway...");
    let answer1 = getInput("What have you got there?");
    while(true){
		if (answer1.isLike("changed my mind","don't want","don't make me"))
		{
			CMessage("I don\'t want to force you to do anything you don\'t want %SubName%");
			some_other_time();
			return;
		}
		else if (answer1.isLike("dildo"))
		{
			CMessage("I thought you didn\'t have one... %Lol%");
			lubeonit();
			return;
		}
		else if (answer1.isLike("carrot", "cucumber", "banana", "fruit", "vegetable"))
		{
			CMessage("As long as you don\'t eat it afterwards %Lol%");
			break;
		}
		else if (answer1.isLike("candle", "candlestick"))
		{
			CMessage("We could use that in other ways as well...");
			break;
		}
		else if (answer1.isLike("what do you mean","dont understand"))
		{
			answer1 = getInput("What are you going to stick in your %Ass%");
			//--Command:LoopAnswer
		}
		else
		{
			CMessage("Alright, if it works for you...");
			break;
		}
	}
    CMessage("You might want to use a condom with that too");
    let answer2 = getInput("Need some more time to prepare?");
    while (!(answer2.isLike("no") || answer2.isLike("ready") || answer2.isLike("fine") || answer2.isLike("begin") || answer2.isLike("go") || answer2.isLike("changed my mind") || answer2.isLike("don't want") || answer2.isLike("don't make me")))
    {
		if (answer2.isLike("yes","wait","one sec","one second","one moment","hold on,not ready"))
		{
			answer2 = getInput("I\'ll wait");
		}
		else{
			answer2 = getInput("Are you going to make me wait much longer?");
		}
    }
     if (answer2.isLike("no", "ready", "fine", "begin", "go"))
    {
        CMessage("I\'m sure you\'re getting a little impatient too %Grin%");
        lubeonit();
        return;
    }
    else if (answer2.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("I don\'t want to force you to do anything you don\'t want %SubName%");
        some_other_time();
        return;
    }
    go_get_dildo();
	return;
}
function go_get_dildo()
{
    let answer0 = getInput("Go get it for me, let me know when you\'re ready");
    while (!(answer0.isLike("yes") || answer0.isLike("back") || answer0.isLike("returned") || answer0.isLike("here") || answer0.isLike("got it") || answer0.isLike("ready") || answer2.isLike("changed my mind") || answer2.isLike("don't want") || answer2.isLike("don't make me")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Go get your dildo %PetName%!");
		}
		else if (answer0.isLike("don't like it","don't like this"))
		{
			answer0 = getInput("You don\'t have to like, you\'re doing it for me remember %EmoteHappy%");
		}
		else if (answer0.isLike("wait","one sec","one second","one moment","hold on","not ready"))
		{
			answer0 = getInput("Sure I\'ll wait");
		}else{
			answer0 = getInput("Are you ready?");
		}
    }
    if (answer0.isLike("yes", "back", "returned", "here", "got it", "ready"))
    {
        CMessage("This is going to be interesting %Grin%");
    }
    else if (answer0.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("It\'s okay %SubName% I don\'t want to force you to do anything you don\'t want %SubName%");
        some_other_time();
        return;
    }
    lubeonit();
	return;
}
function lubeonit()
{
    CMessage("Put some lube on it");
    CMessage("Make it nice and slippery");
    CMessage("Just imagine I\'m there with you");
    CMessage("Wearing a strapon");
    CMessage("That would look something like this");
    showTaggedImage(4, ["dildo","ONEFEMALE"]);
    //--Command:TagSoloF
    lockImages();
    CMessage("Lube up your asshole too, rub it with your fingers");
    CMessage("Alright here we go %PetName%");
    unlockImages();
    CMessage("Put the tip against your asshole, but don\'t push it in yet");
    CMessage("Gently rub your %Ass% with it");
    CMessage("Draw little circles");
    CMessage("Put a little bit of pressure on it");
    CMessage("Doesn\'t that feel gooood %EmoteHappy%");
    CMessage("Imagine it\'s a girl licking your ass");
    showTaggedImage(4, ["LESBIAN","LICKING"]);
    //--Command:TagLesbian
    //--Command:TagRimming
    CMessage("Feel her warm wet tongue on your skin");
    showTaggedImage(4, ["LESBIAN","LICKING"]);
    //--Command:TagLesbian
    //--Command:TagRimming
    CMessage("%SubName%...");
    CMessage("Push it inside, but no more than 1 inch");
    CMessage("Hold it there %SubName%, think about me and my strapon");
    showTaggedImage(4, ["dildo","ONEFEMALE"]);
    //--Command:TagSoloF
    CMessage("Take it out again");
    CMessage("And push it back in, deeper than before");
    CMessage("%EmoteMoan% just feel that cock inside of your ass");
    CMessage("Pull it out...");
    sleep(8);
    CMessage("And slide it in again");
    CMessage("Deeper %SubName%");
    sleep(5);
    CMessage("Even deeper, as deep as you can now");
    CMessage("God that\'s hot");
    showTaggedImage(4, ["dildo"]);
    CMessage("Pull it back out again");
    showTaggedImage(4, ["dildo"]);
    sleep(5);
    CMessage("Now push it in very slowly one more time");
    CMessage("Push it in all the way");
    CMessage("Push it in deeper %Name%");
    sleep(5);
    CMessage("Hold it right there, start stroking your %Cock%");
    sleep(8);
    edge("%Edge%");
    CMessage("Take it out out of your %Ass%");
    CMessage("That\'s enough for now %Smile%");
    CMessage("Take a moment to clean up if necessary %SubName%");
    let answer0 = getInput("Let me know when you\'re ready to continue");
    while (!(answer0.isLike("ready") || answer0.isLike("continue") || answer0.isLike("go on") || answer0.isLike("move on") ))
    {
		if (answer0.isLike("not yet","hold on","wait","need some time","need more time"))
		{
			answer0 = getInput("I\'ll be right here %PetName%, let me know when you\'re ready");
		}else{
			answer0 = getInput("Are you ready or do you need more time?");
		}
    }
    if (answer0.isLike("ready", "continue", "go on", "move on"))
    {
        CMessage("%Smile%");
    }
    if(getVar("pthevAnalFirstTimer", false) && getVar("proud of you", false))
    {
        pthevAnalFirstTimer();
        return;
    }
    return;
    proud_of_you();
}
function proud_of_you()
{
    CMessage("I\'m proud of you %Name% %EmoteHappy%");
    CMessage("You made me very happy %GeneralTime%");
    let answer0 = getInput("How do you feel about what you just did?");
    while (!(answer0.isLike("good") || answer0.isLike("awesome") || answer0.isLike("great") || answer0.isLike("bad") || answer0.isLike("terrible") || answer0.isLike("shit") || answer0.isLike("ashamed") || answer0.isLike("horny") || answer0.isLike("aroused") || answer0.isLike("turned on") || answer0.isLike("sexy") ))
    {
		if (answer0.isLike("weird", "strange", "confused"))
		{
			answer0 = getInput("Would you say it\'s more a good or a bad feeling?");
		}else{
			answer0 = getInput("So... is that good or bad?");
		}
    }
    if (answer0.isLike("good", "awesome", "great"))
    {
        CMessage("Glad to hear it %EmoteHappy%");
    }
    else if (answer0.isLike("bad", "terrible", "shit", "ashamed"))
    {
        CMessage("I\'m sorry to hear that %SubName%");
    }
    else if (answer0.isLike("horny", "aroused", "turned on", "sexy"))
    {
        CMessage("%Grin%");
    }
    let answer1 = getInput("Do you want to continue or is that enough for today?");
    while (!(answer1.isLike("enough") || answer1.isLike("continue") || answer1.isLike("don't stop") || answer1.isLike("don't want to stop") || answer1.isLike("don't wanna stop") || answer1.isLike("go on")))
    {
        answer1 = getInput("Do you want to continue or have you had enough?");
    }
    if (answer1.isLike("enough"))
    {
        CMessage("That\'s okay, it\'s been a pretty intense session");
        endsession();
        return;
    }
    else if (answer1.isLike("continue","don't stop","don't want to stop","don't wanna stop","go on"))
    {
        CMessage("Yeah, I didn't think you'd want to stop");
    }
    CMessage("We\'re just getting into a groove here %EmoteHappy%");
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "MIssBlue" + java.io.File.separator + "pthev_Mod12AnalPlay.js");
	setTempVar("pthev_Mod12AnalPlay_GoOn",true);
    //--Command:BookmarkModule
    return;
}
function pthev_Mod12AnalPlay_GoOn()
{
	delVar("pthev_Mod12AnalPlay_GoOn");
    CMessage("I hope your asshole has recovered by now...");
    CMessage("Don\'t worry %PetName%, we won\'t go there again %Smile%");
    CMessage("Just wanted to tell you again that I\'m really proud of you");
    CMessage("You know I will always respect your limits");
    CMessage("But I LOVE it when you allow me to stretch those limits a little bit");
    CMessage("Now I do wonder what else I can talk you into doing... %Grin%");
    return;
    endsession();
}
function endsession()
{
    CMessage("But I want you to know that I\'m really proud of you %PetName%");
    let answer0 = getInput("I hope we didn\'t cross your limits %GeneralTime%?");
    while (!(answer0.isLike("yes") || answer0.isLike("we did") || answer0.isLike("you did") || answer0.isLike("too much") || answer0.isLike("crossed my limits") || answer0.isLike("no") || answer0.isLike("okay") || answer0.isLike("fine") || answer0.isLike("no problem")))
    {
        answer0 = getInput("So did we cross your limits, yes or no?");
    }
    if (answer0.isLike("yes","we did","you did","too much","crossed my limits"))
    {
        CMessage("I\'m so sorry %SubName% %EmoteSad%");
    }
    else if (answer0.isLike("no", "okay", "fine", "no problem"))
    {
        CMessage("Okay then %Smile%");
        seeyasoon();
        return;
    }
    CMessage("You know you can always use the safeword right?");
    CMessage("Whenever we cross a line or it\'s just a little too much just type the safeword");
    CMessage("And we'll stop our session immediately");
    CMessage("Go take care of yourself now %SubName%");
    seeyasoon();
	return;
}
function seeyasoon()
{
    CMessage("Bye for now, see you soon! %EmoteHappy%");
    endSession();
    return;
    nothingavailable();
}
function nothingavailable()
{
    CMessage("Make sure to find something you can use");
    CMessage("Like a candle or the handle of a hairbrush");
    CMessage("Or a firm and appropriately shaped piece of fruit %Laugh%");
    CMessage("You could buy a dildo of course...");
    CMessage("Keep it ready so we can play when I feel like it");
    return;
    pthevAnal();
}
function pthevAnal()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    if(getVar("pthevDildo", false))
    {
        pthevDildo();
        return;
    }
    if(getVar("pthevButtPlug", false))
    {
        pthevButtPlug();
        return;
    }
    if(getVar("pthevAnalOther", false))
    {
        pthevAnalOther();
        return;
    }
    CMessage("Remember when we talked about doing some anal %SubName%?");
    CMessage("I think you were going to get a dildo or butt plug...");
    let answer0 = getInput("Did you get it?");
    while (!(answer0.isLike("no") || answer0.isLike("dildo") || answer0.isLike("plug") || answer0.isLike("both") || answer0.isLike("else") || answer0.isLike("other") || answer0.isLike("different") || answer0.isLike("object")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("Did you get a dildo or butt plug? Or do you have some other phallus shaped object...");
		}
		else{
			answer0 = getInput("You have something yes or no?");
		}
    }
    if (answer0.isLike("no"))
    {
        CMessage("Too bad, well maybe next time...");
        luckyforme();
        return;
    }
    else if (answer0.isLike("dildo"))
    {
        CMessage("Awesome");
        setVar("pthevDildo", true);
    }
    else if (answer0.isLike("plug"))
    {
        CMessage("Awesome");
        setVar("pthevButtPlug", true);
    }
    else if (answer0.isLike("both"))
    {
        CMessage("Excellent!");
        setVar("pthevDildo", true);
        setVar("pthevButtPlug", true);
    }
    else if (answer0.isLike("else", "other", "different", "object"))
    {
        CMessage("Okay %Smile%");
    }
    CMessage("I\'ll keep it in mind %SubName% %Grin%");
    return;
    pthevAnalOther();
}
function pthevAnalOther()
{
    pthevDildo();
	return;
}
function pthevDildo()
{
    if (randomInteger(1, 100) <= 50)
    {
        call_custom();
        return;
    }
    let answer0 = getInput(random("Ready for ", "How about ", "Are you in the mood for ", "Would you like to do ", "Are you ready for ") + "some anal play, %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Is that a yes or a no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good boy %EmoteHappy%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh you spoilsport... %EmoteSad%");
        luckyforme();
        return;
    }
    let answer1 = getInput("Do you have your toy ready to go?");
    while (!(answer1.isLike("yes") || answer1.isLike("ready") || answer1.isLike("no") || answer1.isLike("time") || answer1.isLike("moment") || answer1.isLike("wait") || answer1.isLike("hold on")))
    {
        answer1 = getInput("Are you ready or do you need a moment?");
    }
    if (answer1.isLike("yes", "ready"))
    {
        CMessage("Look at you, all prepared %Lol%");
        readytogo();
        return;
    }
    else if (answer1.isLike("no", "time", "moment", "wait", "hold on"))
    {
        CMessage("You know you have to be ready for anything %PetName%");
    }
    let answer2 = getInput("Let me know when you are ready, I\'ll wait...");
    while (!(answer2.isLike("ready") || answer2.isLike("begin") || answer2.isLike("start") || answer2.isLike("go") || answer2.isLike("changed my mind") || answer2.isLike("don't want") || answer2.isLike("don't make me")))
    {
		if (answer2.isLike("time", "moment", "wait", "hold on"))
		{
			answer2 = getInput("No problem");
		}
		else{
			answer2 = getInput("Ready, or do you need more time?");
		}
    }
    if (answer2.isLike("ready", "begin", "start", "go"))
    {
        CMessage("Alright then");
    }
    else if (answer2.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("It\'s okay %SubName%");
        luckyforme();
        return;
    }
    readytogo();
}
function readytogo()
{
    CMessage("Go ahead and get it all lubed up if you haven\'t already");
    CMessage("Make it nice and slippery");
    CMessage("And don\'t forget to put some lube on your ass");
    CMessage("You\'ll want it to slide in nice and smooth");
    CMessage("I\'ve been there, I know what I\'m talking about %EmoteLaugh%");
    CMessage("Get ready, hold the tip of your toy up against your ass");
    CMessage("Nice and easy now");
    CMessage("You know what to do %SubName%, push it in");
    sleep(10);
    CMessage("Slide it in and out, imagine how I would fuck you");
    sleep(15);
    CMessage("If me and my big strapon were right there with you...");
    CMessage("I\'d make you my bitch %SubName%");
    if(getVar("cockTorture",false) ){
		cbt("cock");
	}
    let answer0 = getInput("Do you think you could cum just by doing this?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("maybe") || answer0.isLike("know") || answer0.isLike("sure")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Better make sure you don\'t %PetName%, not without permission anyway");
        edgebyanal();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("A lot of guys can do that you know");
    }
    else if (answer0.isLike("maybe", "know", "sure"))
    {
        CMessage("Let\'s not wait for something that might never happen");
    }
    CMessage("Take your toy out of your ass");
    edge("Now grab your %Cock% and edge for me");
    CMessage("That\'s enough for now, put that toy away %PetName%");
    let answer1 = getInput("Let me know when you\'re ready to continue");
    while (!(answer1.isLike("ready") || answer1.isLike("continue") || answer1.isLike("go on") || answer1.isLike("move on") ))
    {
		if (answer1.isLike("not ready","hold on","wait","need some time","need more time"))
		{
			answer1 = getInput("Alright, let me know when you\'re ready");
		}else{
			answer1 = getInput("Are you ready or do you need more time?");
		}
    }
    if (answer1.isLike("ready", "continue", "go on", "move on"))
    {
        CMessage("Good");
    }
    return;
    edgebyanal();
}
function edgebyanal()
{
    CMessage("Try to edge for me without touching your %Cock%");
    CMessage("If you can\'t then you can use your free hand to stroke to the edge");
    edge();
    CMessage("Put that toy away %PetName%, clean up if necessary");
    let answer1 = getInput("Let me know when you\'re ready to continue");
    while (!(answer1.isLike("ready") || answer1.isLike("continue") || answer1.isLike("go on") || answer1.isLike("move on") ))
    {
		if (answer1.isLike("not ready","hold on","wait","need some time","need more time"))
		{
			answer1 = getInput("Alright, let me know when you\'re ready");
		}else{
			answer1 = getInput("Are you ready or do you need more time?");
		}
    }
    if (answer1.isLike("ready", "continue", "go on", "move on"))
    {
        CMessage("Good");
    }
    return;
    luckyforme();
}
function luckyforme()
{
    CMessage("Lucky for me there are plenty of other ways to torment you %Grin%");
    return;
    call_custom();
}
function call_custom()
{
    run("Custom" + java.io.File.separator + "CallFromMod" + java.io.File.separator + "pvCall_FlagAnal.js");
    return;
    return;
    pthevButtPlug();
}
function pthevButtPlug()
{
    if(getVar("pthevPlugged", false) && getVar("pthevMod12Skip", false))
    {
        pthevPlugged();
        return;
    }
    CMessage("Go get your butt plug %PetName%");
    CMessage("I want you to wear it for me");
    CMessage("Put it in right now %Name%");
    let answer0 = getInput("I think you probably don\'t need me to tell you how, right?", 10);
    if (answer0.isTimeout())
    {
        tell_me_how();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("It\'s simple %Name%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I didn\'t think so");
    }
    else
    {
        CMessage("It\'s not a difficult task");
    }
    tell_me_how();
	return;
}
function tell_me_how()
{
    CMessage("Just lube it up and slide it in");
    sleep(9);
    let answer0 = getInput("Is it in?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("in") || answer0.isLike("no")))
    {
        answer0 = getInput("Let me know when you\'re ready");
    }
    if (answer0.isLike("yes", "ready", "done", "in"))
    {
        CMessage("Good");
        setTempVar("pthevPlugged", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hurry up then, let me know when you\'re ready");
    }
    CMessage("Damn, that\'s hot %EmoteHappy%");
    CMessage("I get a kick out of knowing you plug your ass for me, %Name%");
    CMessage("It\'s such a power trip");
    CMessage("%EmoteMoan%");
    CMessage("I might have to, you know... %EmoteWink%");
    CMessage("...go MASTURBATE %Laugh%");
    CMessage("But I want to tease you some more first %Grin%");
    return;
    pthevMod12Skip();
}
function pthevMod12Skip()
{
    edge("%Edge%");
    return;
    pthevNoAnal();
}
function pthevNoAnal()
{
    switch(random("one", "two"))
    {
        case "one":
        one();
        return;
        break;
        case "two":
        two();
        return;
        break;
    }
    one();
	return;
}
function one()
{
    edge("%Edge%");
    return;
    two();
}
function two()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    let answer0 = getInput("Mmm would you have liked to keep going?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Always keep them wanting more %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Grin%");
    }
    CMessage("Remember %PetName%, you are here to satisfy <i>my</i> demands");
    CMessage("I don\'t care whether you are satisfied or not");
    CMessage("You know that Rolling Stones song, I Can\'t Get No Satisfaction?");
    CMessage("That should be your personal anthem");
    CMessage("You can\'t get no satisfaction, %Name%");
    CMessage("Because I won\'t let you have it");
    if (getOrgasmChance()==100 )
    {
        CMessage("Well, eventually I will %Laugh%");
    }
    else if (getOrgasmChance()>0)
    {
        CMessage("Well, maybe I will %GeneralTime% %EmoteWink%");
    }
    CMessage("You Can\'t Always Get What You Want, %Name% %EmoteWink%");
    return;
}
