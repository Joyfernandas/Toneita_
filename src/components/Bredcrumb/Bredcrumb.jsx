import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./bredcrump.css";
function BreadcrumbExample() {
  return (
    <div class="container-fluid mt-4">
      <Breadcrumb className="Bred">
        <Breadcrumb.Item href="/" className="colobred">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/mattress" className="colobred">
          Mattress
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/carts" className="colobred">
          Carts
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"></Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbExample;
