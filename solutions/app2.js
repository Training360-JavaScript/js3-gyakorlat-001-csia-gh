const HU = {
  date(d) {
    return new Intl.DateTimeFormat('hu-HU').format(d);
  },
  curreny(num) {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
    }).format(num);
  },
  list(arr) {
    return (
      arr.slice(0, arr.length - 1).join(', ') + ` és ${arr[arr.length - 1]}`
    );
  },
};

export default HU;
