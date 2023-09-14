import { Suspense, lazy} from "react";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import NavbarContent from "../../layoutCompanent/NavbarContent";


function Mehsullar() {

  const MehsullarCard = lazy(()=>import('./MehsullarCard'))
  return (
    <>
      <LayoutCompanent>
        <NavBar />
        <NavbarContent />
    <Suspense fallback={<div className="Fallback"><img src={'./img/b620ccb3ae8c14ea5447d159ebb1da58.gif'}/></div>}>
        <MehsullarCard/>
    </Suspense>
      </LayoutCompanent>
    </>
  );
}
export default Mehsullar
