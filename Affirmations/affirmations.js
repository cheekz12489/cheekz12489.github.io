const dailyMessage = {
    affirmation: ['I radiate confidence.', 'Happiness is a choice. Today I choose to be happy.', 'I can be whoever I want to be.', 'I am calm and relaxed', 'When I do my best, I accomplish great things.', 'I deserve the best.', 'Anything is possible for me.', 'I am extremely intelligent.', 'Everything that happens, has a purpose.', 'Everything is as it should be.', 'There is beauty all around me.', 'I will attract and put out good energy today.'],
    focus: ['Kindness', 'Positive Thinking', 'Patience', 'Mindfulness', 'Productivity', 'Honesty', 'Love', 'Positivity', 'Responsibility', 'Accountability', 'Understanding', 'Compassion'],
    activity: ['Do yoga', 'Read a book', 'Meditate', 'Go for a walk', 'Play video games', 'Call someone', 'Practice programming', 'Sing', 'Play with legos', 'Have sex', 'Go to a meeting', 'Exercise', 'Pray', 'Journal', 'Give someone a compliment'],

    createMessage() {
        const dailyAffirmation = this.affirmation[Math.floor(Math.random() * this.affirmation.length)];
        const dailyFocus = this.focus[Math.floor(Math.random() * this.focus.length)];
        const dailyActivity = this.activity[Math.floor(Math.random() * this.activity.length)];

        console.log('');
        console.log('Good Morning, Beautiful!');
        console.log('');
        console.log(dailyAffirmation);
        console.log(`Today, I will focus on ${dailyFocus}.`);
        console.log(`I will do my best to ${dailyActivity}.`);
        console.log('Head Down, Heart Open!');
        console.log('');
    }
}

dailyMessage.createMessage();