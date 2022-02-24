const loadData = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayData(data));
}
loadData();
const displayData = (data) => {
    const res = data.results;
    const imgHolder = document.getElementById('user-img');
    res.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
          <img src = "${photo.picture.large}">
          <p>location: ${photo.location.city}</p>
          <p>Coordinates: ${photo.location.coordinates.latitude}</p>
          <p>Street: ${photo.location.street.number}</p>
          <p>Timezone: ${photo.location.timezone.offset}</p>
        `
        imgHolder.appendChild(div);
    })

}