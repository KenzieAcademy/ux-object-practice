function cloneAllTheRosesAndChangeTheirColors(estate) {
  let newRose = [];
  for (let originalRose of estate.roseArbor) {
    if (originalRose.isFlawed) {
      newRose.push(newRose(originalRose));
    } else {
      newRose.push(originalRose);
    }
  }
  for (let originalRose of newRose) {
    estate.roseArbor.push(originalRose);
  }
}