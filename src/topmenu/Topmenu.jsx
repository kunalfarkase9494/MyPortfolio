

const Topmenu = () => {
  return (
    <>
    <div data-aos="slide-down" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container">
    <a class="navbar-brand" href="#">My Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="#hero" class="nav-link active" aria-current="page">About me</a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a href="#skills" class="nav-link" >Skills</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  </div>
    </>
  )
}

export default Topmenu;
