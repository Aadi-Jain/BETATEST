// array describing the color for each team
const colors = {
  Sanskriti: '#00D2BE',
  DPS_1: '#DC0000',
  DPS_2: '#1E41FF',
  DPS_3: '#FFF500',
  Springdales: '#F596C8',
  
}


const leaderboard = [
  {
    name: 'Aadi Jain',
    team: 'Sanskriti',
    points: '1000'
  },
  {
    name: 'User Lastname',
    team: 'Sanskriti',
    points: '990'
  },
  {
    name: 'User Lastname',
    team: 'DPS_1',
    points: '980'
  },
  {
    name: 'User Lastname',
    team: 'DPS_2',
    points: '+870'
  },
  {
    name: 'User Lastname',
    team: 'DPS_1',
    points: '860'
  },
  {
    name: 'User Lastname',
    team: 'DPS_2',
    points: '850'
  },
  {
    name: 'User Lastname',
    team: 'DPS_3',
    points: '300'
  }, {
    name: 'User Lastname',
    team: 'Springdales',
    points: '298'
  },
  
  {
    name: 'User Lastname',
    team: 'Springdales',
    points: '65'
  },
  
  {
    name: 'User Lastname',
    team: 'DPS_3',
    points: '0'
  }
];


const main = d3
  .select('table');


const students = main
  .selectAll('tr.student')
  .data(leaderboard)
  .enter()
  .append('tr')
  .attr('class', 'student');




students
  .append('td')
  .text((d, i) => i + 1)
  .attr('class', 'position');



students
  .append('td')
  
  .html (({name, team}) => `${name.split(' ').map((part, index) => index > 0 ? `<strong>${part}</strong>` : `${part}`).join(' ')} <span>${team}</span>`)
 
  .style('border-left', ({team}) => {
    
    const color = team.split(' ').map((word, index) => index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : `${word}` ).join('');
    return `4px solid ${colors[color]}`;
  })
  .attr('class', 'student');


students
  .append('td')
  .attr('class', 'points')
  .append('span')
  .text(({points}) => points);