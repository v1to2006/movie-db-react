import { Navbar, Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.elements);
    const formElements = form.elements as typeof form.elements & {
      searchInputField: { value: string };
    };

    if (formElements.searchInputField.value.length > 0)
      navigate(`/search/${formElements.searchInputField.value}`);
  }

  <a href="/govno"><span>asdas</span></a>

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid="md">
        <Navbar.Brand href="/">
          <img
            src="/movie-icon.svg"
            width={35}
            height={35}
            className="m-2"
          />
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form
            className="d-flex form-inline mx-auto my-2 w-50"
            onSubmit={handleSubmit}
          >
            <Form.Control
              id="searchInputField"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
