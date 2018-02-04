function SeeorNotSee(self) {
if (self.value === '보임') {
     document.querySelector('nav').style.display = 'none'; self.value = '가림';
 else {
     document.querySelector('nav').style.display = 'flex';
     self.value = '보임';
}
}