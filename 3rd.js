body{
  font-family: Arial;
  background: linear-gradient(to right,#ff7e5f,#feb47b);
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}

.container{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:20px;
}

.card{
  background:white;
  padding:20px;
  width:230px;
  text-align:center;
  border-radius:12px;
  box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

.price{
  font-size:22px;
  font-weight:bold;
  color:green;
  margin:10px 0;
}

.flash{
  color:red;
}

.warning{
  font-weight:bold;
  min-height:25px;
}

button{
  padding:6px 12px;
  background:orange;
  border:none;
  color:white;
  border-radius:5px;
  cursor:pointer;
}
