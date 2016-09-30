import React from 'react';

const Help = React.createClass({
  render () {
    let data = [
      	{
          title: 'What is "Playing The Ghost?"',
          content: `Playing the Ghost blah blah blah While you can still use
                    this app with the old fashion rules for playing the ghost,
                    I recommend some modifications.`
        }, {
          title: 'How do I use Pool Ghost?',
          content: `Pool Ghost was made to virtualize an opponent. Traditionally
                    when you play the ghost, a missed shot is a game loss. While
                    that is great practice, I wanted something more true to playing
                    other players. Here, you play a normal 9 ball ghost game, but
                    when you miss you click on the ball you missed on. A calculation
                    then based upon your current difficulty level and the ball that
                    was missed will decide if the ghost ran out or not. If the ghost
                    missed, you get ball and hand and continue through the rack.`
        }, {
          title: 'What exactly does "Difficulty" do?',
          content: `Difficulty increases the likelihood that the ghost will
                    win the rack on each miss. While each ball as you get closer
                    to the 9 increases this percentage, the difficulty sets the
                    overall increase of that percentage. For example, on easy difficulty,
                    if you missed the 5 ball there is a 25% chance out of 100 (1 in 4 times)
                    that the ghost will win the rack. On medium, it’s a 50% chance, and hard it’s a 85% chance.`
        }, {
          title: 'Does the race matter?',
          content: `The race can be any positive number, but I recommend races
                    between 5-10 games. Most 9 ball tournaments are around that length.`
        }, {
          title: 'What exactly does "Difficulty" do?',
          content: `Difficulty increases the likelihood that the ghost will
                    win the rack on each miss. While each ball as you get closer
                    to the 9 increases this percentage, the difficulty sets the
                    overall increase of that percentage. For example, on easy difficulty,
                    if you missed the 5 ball there is a 25% chance out of 100 (1 in 4 times)
                    that the ghost will win the rack. On medium, it’s 50% chance, and hard it’s 85%.`
        }, {
          title: 'How do I start each rack?',
          content: `You can break or randomly roll all 9 balls out onto the table.
                    Once all the balls are randomly positioned on the table,
                    make sure there are no clusters and every ball has a pocket.
                    This will help keep the difficulty more consistent and
                    also make sure you are always shooting at an entire rack.`
        }, {
          title: 'Can I play safe?',
          content: `While safeties are an important part of pool,
                    the focus of this app is more to improve your position play
                    and runout game. Safeties will not be counted as every shot should
                    result in pocketing the intended ball.`
        }, {
          title: 'What if I miss but luckily get safe?',
          content: `If you miss the object ball and luckily have the cueball
                    get safe, it is still recorded as a miss. Rememeber, even though
                    you would have got lucky and possibly safe in a real match, this
                    app is tracking your run out skills on intended shots only.`
        }, {
          title: 'Does fluking the object ball or 9 ball count?',
          content: `Fluking the 9 ball or making the object ball in the wrong pocket
                    is rewarded in basic 9 ball. In this app, I recommend treating
                    both of these as a miss as it was not the intended shot.`
        }, {
          title: 'I missed but accidently tied balls up?',
          content: `If you missed, tied balls up, and then the ghost missed and you
                    get to shoot again, your goal is to free the tied up balls in
                    a consistant way to how they were before. If that is difficult to do,
                    I also recommend spotting one of the tied ball. Use your best judgement
                    on where to place the ball. For example, if the ball was on the rail,
                    perhaps try to put it on another rail with a free pocket.`
        }, {
          title: 'I scratched. Now what?',
          content: `Scratching is treated just as a normal miss. Record the
                    ball you were intending to make as the missed ball and if
                    the ghost misses, continue with ball in hand.`
        }
      ];

    return (
    	<Accordion data={data} />
    );
  }
});

const Accordion = React.createClass({

  componentWillMount () {
    let accordion = [];

    this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false
      });
    });

    this.setState({
      accordionItems: accordion
    });
  },

  click (i) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i)

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({accordionItems: newAccordion});
  },

  render () {
    const sections = this.state.accordionItems.map((i) => (
      <div key={this.state.accordionItems.indexOf(i)}>
        <div className='title' onClick={this.click.bind(null, i)}>
          <span className='title-text'>
            {i.title}
          </span>
        </div>
          <div className={i.open ? 'content content-open' : 'content'}>
            <div className={i.open ? 'content-text content-text-open' : 'content-text'}> {i.content}
            </div>
          </div>
        </div>
      ));

    return (
      <div className='accordion'>
        {sections}
      </div>
    );
   }
});


export default Help;
