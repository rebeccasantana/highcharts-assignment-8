Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Guavas','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Alex and Sam\'s house'
      }
    },
    series: [{
      name: 'Alex',
      data: [6, 1, 0, 4]
    }, {
      name: 'Sam',
      data: [6, 5, 7, 3]
    }]
  });
