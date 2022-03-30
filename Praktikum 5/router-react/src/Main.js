import React from "react";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Dropdown } from "bootstrap";


export default function Case() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <AuthButton />
          <LoginPage />
        </Route>
        <HomeRoute path="/home">
          <AuthButton />
          <ProtectedPage />
        </HomeRoute>
        <Route path="/topics">
          <AuthButton/>
          <Topics />
        </Route>
        <Route path="/vivo">
            <AuthButton/>
            <Vivo/>
        </Route>
        <Route path="/oppo">
            <AuthButton/>
            <Oppo/>
        </Route>
      </Switch>
    </Router>
  );
}
function Vivo(){
    return (
        <div class="protected">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Phone Case</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/home" class="nav-item nav-link">Home</Link>
                <Link to="/vivo" class="nav-item nav-link active">Vivo</Link>
                <Link to="/oppo" class="nav-item nav-link ">Oppo</Link>
                <Link to="/vivo" class="nav-item nav-link ">Samsung</Link>
                <Link to="/vivo" class="nav-item nav-link ">Iphone</Link>
                <Link to="/vivo" class="nav-item nav-link ">Poco</Link>
                <Link to="/vivo" class="nav-item nav-link ">Realme</Link>
                <Link to="/vivo" class="nav-item nav-link ">Huawei</Link>
                <Link to="/vivo" class="nav-item nav-link ">Asus</Link>
                <Link to="/topics" class="nav-item nav-link">About</Link>
              </div>
            </div>
          </nav>
          <hr />
          <marquee direction="right"><h1>Phone Case Vivo</h1></marquee>
          {/* <h1 class="text-center">Phone Case</h1> */}
          <br />
          <br />
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <img src="https://cf.shopee.co.id/file/5f9bf750568148754763c2aaf97b1d8d" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp13.900</p>
                  <a href="https://shopee.co.id/CASING-SOFTCASE-VIVO-Y91C-Y17-Y15-Y12-Y3-Y30-Y50-Y71-Y81-Y83-Y55-Y53-V9-Y91-Y95-Y93-V15-KC2001-i.158190750.2566800165?sp_atk=f78fecc0-3a9e-45f5-bb3b-6719f37fd336" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/d259395eff3ee94b710c2e75ad542a1c" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp13.090</p>
                  <a href="https://shopee.co.id/CASING-SOFTCASE-TPU-VIVO-Y91C-Y17-Y15-Y12-Y3-Y71-Y81-Y55-Y53-V9-Y91-Y95-Y93-V15-Y30-Y50-R428-i.158190750.6955412170?sp_atk=1f8411da-27fa-4743-a3ed-9d3b14ef32fd" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/37b23c5e67c34549eeb47c2a1df4c053" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp9.999</p>
                  <a href="https://shopee.co.id/SS086-SOFTCASE-VIVO-Y12-Y15-Y17-Y20-Y20S-Y12S-Y21-Y21s-Y33s-2021-Y30-Y50-Y30I-Y51-Y51A-Y71-Y71I-Y81-Y81C-Y83-Y91-Y93-Y95-Y91C-Y1S-MM4793-i.211160808.13453580918?sp_atk=2ff431e8-e238-4e36-ad74-dd8772c1d1c7" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/e06f1d9dbb3d658a955b5345d5494a7f" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp12.800</p>
                  <a href="https://shopee.co.id/-SOFTCASE-DI0R-SIFTCASE-vivo-y17-y20-y91-y30-y91c-y81-y83-y71-y53-y61-y21-v11-pro-s1-pro-y53s-v15-v11-v20-se-v21-v5-v7-plus-v9-i.9370955.15509207929?sp_atk=ff4d2b15-8dc3-4a08-9578-9327896cdb75" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/aa93edcbb5a3d7d48f8753d15d30a4c9_tn" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp 25.000</p>
                  <a href="https://shopee.co.id/Hard-Case-Xiaomi-Poco-M3-M3-Pro-Poco-X3-Poco-F3-Case-Robot-i-Crystal-Transformers-Plindung-Handphone-i.530524809.13713480252?sp_atk=5ea4743f-e63c-4478-94e4-8c0b68c9437b" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/075afd5d5b67fc91d53518964b6da9d8" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp28.500</p>
                  <a href="https://shopee.co.id/-MC562-Softcase-Glass-Kilau-2d-REALME-8-5G-4G-REALME-8-PRO-NARZO-20-REALME-5-PRO-C21-C20-C25-C17-i.164558315.10230080237?sp_atk=1c845fde-4681-4832-be90-f09138b0b1c7" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/85fb0d89b5c44366bfc4d6960212bbb4" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp 22.500</p>
                  <a href="https://shopee.co.id/tpu-softcase-diamond-for-huawei-Y5-2018-i.127168329.2497865850?sp_atk=91abe99f-13cb-4d79-9ff6-5d0ff55ac9b8" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/75a171e8683261178d0d67ff27bdfb15_tn" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp 50.000</p>
                  <a href="https://shopee.co.id/Case-Asus-Rog-Phone-5-ZS673KS-5S-ZS676KS-Material-Soft-Case-Carbon-Armour-TPU-Black-Original-i.71631995.14866712143?sp_atk=5128d602-c5a3-4e39-829c-a04d7bdb5ea6" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      );
}
function Oppo(){
    return (
        <div class="protected">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Phone Case</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/home" class="nav-item nav-link">Home</Link>
                <Link to="/vivo" class="nav-item nav-link ">Vivo</Link>
                <Link to="/oppo" class="nav-item nav-link active">Oppo</Link>
                <Link to="/vivo" class="nav-item nav-link ">Samsung</Link>
                <Link to="/vivo" class="nav-item nav-link ">Iphone</Link>
                <Link to="/vivo" class="nav-item nav-link ">Poco</Link>
                <Link to="/vivo" class="nav-item nav-link ">Realme</Link>
                <Link to="/vivo" class="nav-item nav-link ">Huawei</Link>
                <Link to="/vivo" class="nav-item nav-link ">Asus</Link>
                <Link to="/topics" class="nav-item nav-link">About</Link>
              </div>
            </div>
          </nav>
          <hr />
          <marquee direction="right"><h1>Phone Case Oppo</h1></marquee>
          {/* <h1 class="text-center">Phone Case</h1> */}
          <br />
          <br />
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <img src="https://cf.shopee.co.id/file/5f9bf750568148754763c2aaf97b1d8d" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Vivo</h5>
                  <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
                  <p class="card-price">Rp13.900</p>
                  <a href="https://shopee.co.id/CASING-SOFTCASE-VIVO-Y91C-Y17-Y15-Y12-Y3-Y30-Y50-Y71-Y81-Y83-Y55-Y53-V9-Y91-Y95-Y93-V15-KC2001-i.158190750.2566800165?sp_atk=f78fecc0-3a9e-45f5-bb3b-6719f37fd336" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/de2d63740f495d2ac3866e16d8337877_tn" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Oppo</h5>
                  <p class="card-text">Deskripsi Produk : OPPO A5S A7 F11 A9 A1K A71 F9 A3S A5 A39 A57 A37 NEO 9 A5 2020 A9 2020 F1S A59 F7 A31</p>
                  <p class="card-price">Rp17.500</p>
                  <a href="https://shopee.co.id/CASING-SOFTCASE-ASC-OPPO-F11-A1K-C2-A71-F9-A5S-A3S-A39-A37-A5-C11-C15-F1S-A33-2020-R612-i.158190750.8532229591?sp_atk=879583a1-da6e-4cc7-a2ba-c21cd4a72769" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/e90c2249f2482447ddf54ea8fa21ccbf" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Samsung</h5>
                  <p class="card-text">Deskripsi Produk : Design Colorful Ice Cream Color Smiley Pattern. Features Shockproof matte case, Function Dirt-resistant</p>
                  <p class="card-price">Rp16.600</p>
                  <a href="https://shopee.co.id/Case-Casing-Samsung-A50-A50s-A30s-A03S-A02-M02-A022-M022-M02S-A025-F02S-A02S-M10-A10-A11-A12-A125-M12-F12-A30-A20-A20s-A21s-A22-A31-A315F-A32-A51-M40S-A515F-A52-A52S-A750-A7-2018-A750F-A72-J4-Prime-J4-Plus-J6-prime-J6-plus-J7-Pro-J7-Prime-S20-Soft-TPU-CAS-i.609066956.17115352415?sp_atk=2ac69a8c-ba3d-4c1c-bfa3-b27d9d652f9e" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/8c2a5fd76b5dde81a806951025b8b09f" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Iphone</h5>
                  <p class="card-text">Deskripsi Produk : ip 11 11pro 11promax 12mini ip 12 12pro 12promax ip 13 13pro 13promax</p>
                  <p class="card-price">Rp88.000</p>
                  <a href="https://shopee.co.id/NEW-!!-PROSTEEL-Case-Iphone-(-Iphone-11-12promax-READY-!!-)-i.7796333.10224284163?sp_atk=74a4b8eb-53be-41e8-96c2-fa09e0adb5dc" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/aa93edcbb5a3d7d48f8753d15d30a4c9_tn" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Poco</h5>
                  <p class="card-text">Deskripsi Produk : Hard case berbahan dasar plastik jenis keras dengan lapisan tpu di kelas bahan case terbaik.</p>
                  <p class="card-price">Rp 25.000</p>
                  <a href="https://shopee.co.id/Hard-Case-Xiaomi-Poco-M3-M3-Pro-Poco-X3-Poco-F3-Case-Robot-i-Crystal-Transformers-Plindung-Handphone-i.530524809.13713480252?sp_atk=5ea4743f-e63c-4478-94e4-8c0b68c9437b" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/075afd5d5b67fc91d53518964b6da9d8" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Realme</h5>
                  <p class="card-text">Deskripsi Produk : Bahan BERKUALITAS,Karena di bagian pinggiran bahan Karet key volume & power tertutup,di tengah sejenis Viber.</p>
                  <p class="card-price">Rp28.500</p>
                  <a href="https://shopee.co.id/-MC562-Softcase-Glass-Kilau-2d-REALME-8-5G-4G-REALME-8-PRO-NARZO-20-REALME-5-PRO-C21-C20-C25-C17-i.164558315.10230080237?sp_atk=1c845fde-4681-4832-be90-f09138b0b1c7" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/85fb0d89b5c44366bfc4d6960212bbb4" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Huawei</h5>
                  <p class="card-text">Deskripsi Produk : TERSEDIA WARNA BIRU HITAM BENING MERAH JAMBU, BARANG DIRETUR DENGAN BARANG YG SAMA</p>
                  <p class="card-price">Rp 22.500</p>
                  <a href="https://shopee.co.id/tpu-softcase-diamond-for-huawei-Y5-2018-i.127168329.2497865850?sp_atk=91abe99f-13cb-4d79-9ff6-5d0ff55ac9b8" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
              <img src="https://cf.shopee.co.id/file/75a171e8683261178d0d67ff27bdfb15_tn" class="card-img-top"></img>
                <div class="card-body">
                  <h5 class="card-title">Case for Asus</h5>
                  <p class="card-text">Deskripsi Produk : Case Asus Rog Phone 5 ZS673KS / 5S ZS676KS Material Soft Case Carbon Armour TPU Black Original</p>
                  <p class="card-price">Rp 50.000</p>
                  <a href="https://shopee.co.id/Case-Asus-Rog-Phone-5-ZS673KS-5S-ZS676KS-Material-Soft-Case-Carbon-Armour-TPU-Black-Original-i.71631995.14866712143?sp_atk=5128d602-c5a3-4e39-829c-a04d7bdb5ea6" class="btn btn-success btn-lg">Buy</a>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      );
}
function Topics() {
  // `path` untuk membuat jalur <Route> yang terhadap rute induk,
  //sedangkan` url` untuk membuat link.
  let { path, url } = useRouteMatch();
  return (
    <div class="topics">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Phone Case</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link">Home</Link>
            <Link to="/vivo" class="nav-item nav-link">Vivo</Link>
            <Link to="/oppo" class="nav-item nav-link">Oppo</Link>
            <Link to="/vivo" class="nav-item nav-link">Samsung</Link>
            <Link to="/vivo" class="nav-item nav-link">Iphone</Link>
            <Link to="/vivo" class="nav-item nav-link">Poco</Link>
            <Link to="/vivo" class="nav-item nav-link">Realme</Link>
            <Link to="/vivo" class="nav-item nav-link">Huawei</Link>
            <Link to="/vivo" class="nav-item nav-link">Asus</Link>
            <Link to="/topics" class="nav-item nav-link active">About</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h2>Abouts</h2>
      <ul>
      <li>
          <Link to={`${url}/Tita Wijayanti`}>Name</Link>
        </li>
        <li>
          <Link to={`${url}/tita@gmail.com`}>Email</Link>
        </li>
        <li>
          <Link to={`${url}/Username: titaw1`}>GitHub</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
          <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}


function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome to Phone Case Store!{" "}
      <button type="button" class="btn btn-danger"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
      <p>You are not Logged in.</p>
    );
}

function HomeRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ProtectedPage() {
  return (
    <div class="protected">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Phone Case</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/vivo" class="nav-item nav-link ">Vivo</Link>
            <Link to="/oppo" class="nav-item nav-link ">Oppo</Link>
            <Link to="/vivo" class="nav-item nav-link ">Samsung</Link>
            <Link to="/vivo" class="nav-item nav-link ">Iphone</Link>
            <Link to="/vivo" class="nav-item nav-link ">Poco</Link>
            <Link to="/vivo" class="nav-item nav-link ">Realme</Link>
            <Link to="/vivo" class="nav-item nav-link ">Huawei</Link>
            <Link to="/vivo" class="nav-item nav-link ">Asus</Link>
            <Link to="/topics" class="nav-item nav-link ">About</Link>
          </div>
        </div>
      </nav>
      <hr />
      <marquee direction="right"><h1>Phone Case Store</h1></marquee>
      {/* <h1 class="text-center">Phone Case</h1> */}
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/5f9bf750568148754763c2aaf97b1d8d" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Vivo</h5>
              <p class="card-text">Deskripsi Produk : CASING SOFT CASE VIVO Y91C Y17 Y15 Y12 Y3 Y30 Y50 Y71 Y81 Y83 Y55 Y53 V9 Y91 Y95 Y93 V15 KC2001</p>
              <p class="card-price">Rp13.900</p>
              <a href="https://shopee.co.id/CASING-SOFTCASE-VIVO-Y91C-Y17-Y15-Y12-Y3-Y30-Y50-Y71-Y81-Y83-Y55-Y53-V9-Y91-Y95-Y93-V15-KC2001-i.158190750.2566800165?sp_atk=f78fecc0-3a9e-45f5-bb3b-6719f37fd336" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/de2d63740f495d2ac3866e16d8337877_tn" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Oppo</h5>
              <p class="card-text">Deskripsi Produk : OPPO A5S A7 F11 A9 A1K A71 F9 A3S A5 A39 A57 A37 NEO 9 A5 2020 A9 2020 F1S A59 F7 A31</p>
              <p class="card-price">Rp17.500</p>
              <a href="https://shopee.co.id/CASING-SOFTCASE-ASC-OPPO-F11-A1K-C2-A71-F9-A5S-A3S-A39-A37-A5-C11-C15-F1S-A33-2020-R612-i.158190750.8532229591?sp_atk=879583a1-da6e-4cc7-a2ba-c21cd4a72769" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/e90c2249f2482447ddf54ea8fa21ccbf" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Samsung</h5>
              <p class="card-text">Deskripsi Produk : Design Colorful Ice Cream Color Smiley Pattern. Features Shockproof matte case, Function Dirt-resistant</p>
              <p class="card-price">Rp16.600</p>
              <a href="https://shopee.co.id/Case-Casing-Samsung-A50-A50s-A30s-A03S-A02-M02-A022-M022-M02S-A025-F02S-A02S-M10-A10-A11-A12-A125-M12-F12-A30-A20-A20s-A21s-A22-A31-A315F-A32-A51-M40S-A515F-A52-A52S-A750-A7-2018-A750F-A72-J4-Prime-J4-Plus-J6-prime-J6-plus-J7-Pro-J7-Prime-S20-Soft-TPU-CAS-i.609066956.17115352415?sp_atk=2ac69a8c-ba3d-4c1c-bfa3-b27d9d652f9e" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/8c2a5fd76b5dde81a806951025b8b09f" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Iphone</h5>
              <p class="card-text">Deskripsi Produk : ip 11 11pro 11promax 12mini ip 12 12pro 12promax ip 13 13pro 13promax</p>
              <p class="card-price">Rp88.000</p>
              <a href="https://shopee.co.id/NEW-!!-PROSTEEL-Case-Iphone-(-Iphone-11-12promax-READY-!!-)-i.7796333.10224284163?sp_atk=74a4b8eb-53be-41e8-96c2-fa09e0adb5dc" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/aa93edcbb5a3d7d48f8753d15d30a4c9_tn" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Poco</h5>
              <p class="card-text">Deskripsi Produk : Hard case berbahan dasar plastik jenis keras dengan lapisan tpu di kelas bahan case terbaik.</p>
              <p class="card-price">Rp 25.000</p>
              <a href="https://shopee.co.id/Hard-Case-Xiaomi-Poco-M3-M3-Pro-Poco-X3-Poco-F3-Case-Robot-i-Crystal-Transformers-Plindung-Handphone-i.530524809.13713480252?sp_atk=5ea4743f-e63c-4478-94e4-8c0b68c9437b" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/075afd5d5b67fc91d53518964b6da9d8" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Realme</h5>
              <p class="card-text">Deskripsi Produk : Bahan BERKUALITAS,Karena di bagian pinggiran bahan Karet key volume & power tertutup,di tengah sejenis Viber.</p>
              <p class="card-price">Rp28.500</p>
              <a href="https://shopee.co.id/-MC562-Softcase-Glass-Kilau-2d-REALME-8-5G-4G-REALME-8-PRO-NARZO-20-REALME-5-PRO-C21-C20-C25-C17-i.164558315.10230080237?sp_atk=1c845fde-4681-4832-be90-f09138b0b1c7" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/85fb0d89b5c44366bfc4d6960212bbb4" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Huawei</h5>
              <p class="card-text">Deskripsi Produk : TERSEDIA WARNA BIRU HITAM BENING MERAH JAMBU, BARANG DIRETUR DENGAN BARANG YG SAMA</p>
              <p class="card-price">Rp 22.500</p>
              <a href="https://shopee.co.id/tpu-softcase-diamond-for-huawei-Y5-2018-i.127168329.2497865850?sp_atk=91abe99f-13cb-4d79-9ff6-5d0ff55ac9b8" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src="https://cf.shopee.co.id/file/75a171e8683261178d0d67ff27bdfb15_tn" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Case for Asus</h5>
              <p class="card-text">Deskripsi Produk : Case Asus Rog Phone 5 ZS673KS / 5S ZS676KS Material Soft Case Carbon Armour TPU Black Original</p>
              <p class="card-price">Rp 50.000</p>
              <a href="https://shopee.co.id/Case-Asus-Rog-Phone-5-ZS673KS-5S-ZS676KS-Material-Soft-Case-Carbon-Armour-TPU-Black-Original-i.71631995.14866712143?sp_atk=5128d602-c5a3-4e39-829c-a04d7bdb5ea6" class="btn btn-success btn-lg">Buy</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}
