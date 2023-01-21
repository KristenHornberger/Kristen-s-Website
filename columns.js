Highcharts.chart('columnscontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Peaches', 'Pineapple', 'Kiwis', 'Watermelon', 'Strawberries']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Kristen',
        data: [5, 7, 5, 7, 9]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});