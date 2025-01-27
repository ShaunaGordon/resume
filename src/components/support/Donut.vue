<template>
<div :id="id">

</div>
</template>

<script>
import * as d3 from 'd3';

export default {
  props: [
    'name',
    'items'
  ],
  computed: {
    id() {
      return `skill-${this.name}`
    }
  },
  methods: {
    createD3DataSet() {
      const names = Object.keys(this.items);
      return names.map((name, index) => {
        return {
          index: index,
          name: name,
          years: this.items[name]
        }
      });
    },
    createChart() {
      const dataset = this.createD3DataSet();

      const pie = d3.pie()
        .value(d => d.years)
        .sort(null)
        .padAngle(0.01);

      const w = 300;
      const h = 300;
      const canvasWidth = w * 1.1;
      const canvasHeight = h * 1.1;
      const donutWidth = 35;
      const radius = Math.min(w / 1.5, h) / 2;

      const color = d3.scaleSequential(d3.interpolateViridis);

      const arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

      const outerArc = d3.arc()
        .innerRadius(radius * 1.26)
        .outerRadius(radius * 1.26);

      const zoomArc = d3.arc()
        .innerRadius((radius - donutWidth) * 1.1)
        .outerRadius(radius * 1.2);

      const svg = d3.select(`#${this.id}`)
        .append('svg')
        .attr('width', canvasWidth)
        .attr('height', canvasHeight);

      svg.append('g').attr('class', 'slices').attr('transform', 'translate(' + canvasWidth / 2 + ',' + canvasHeight / 2 + ')');
      svg.append('g').attr('class', 'labels').attr('transform', 'translate(' + canvasWidth / 2 + ',' + canvasHeight / 2 + ')');
      svg.append('g').attr('class', 'lines').attr('transform', 'translate(' + canvasWidth / 2 + ',' + canvasHeight / 2 + ')');
      svg.append('g').attr('class', 'name').attr('transform', 'translate(' + canvasWidth / 2 + ',' + canvasHeight / 2 + ')');

      svg.select('.slices').selectAll('.slice')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('id', (d, i) => `slice-${d.data.name}-${i}`)
        .attr('class', 'slice')
        .attr('d', arc)
        .attr('fill', (d) => color(d.data.name.length * (d.data.index + 1) * d.data.years * 0.005))
        .on('mouseenter', function() {
          d3.select(this)
            .transition()
            .duration(800)
            .attr('d', zoomArc);
        })
        .on('mouseleave', function() {
          d3.select(this)
            .transition()
            .duration(800)
            .attr('d', arc);
        })
        .append('svg:title')
        .text((d) => `${d.data.years} ` + (d.data.years > 1 ? 'years' : 'year'));

      svg.select('.labels').selectAll('.path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('id', (d, i) => `label-${d.data.name}-${i}`)
        .attr('d', outerArc)
        .attr('class', 'path');

      svg.select('.slices').selectAll('.label')
        .data(pie(dataset))
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('transform', (d) => 'translate(' + outerArc.centroid(d) + ')')
        .attr('text-anchor', 'middle')
        .text((d) => d.data.name);

      svg.select('.name')
        .append('text')
        .attr('class', 'name')
        .attr('text-anchor', 'middle')
        .text(this.name);
    }
  },
  mounted() {
    this.createChart();
  }
}
</script>

<style>
svg {
    font-size: 1.1rem;
}

.slice {
    transition: all 1s;
}
</style>
