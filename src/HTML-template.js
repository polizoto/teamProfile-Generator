// Card Function

{/* <div class="card" style="width: 18rem;">
<div class="card-body">
  <h2 class="card-title">Joseph Polizzotto</h2>
  <p class="card-text">Manager</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">id</li>
  <li class="list-group-item">email</li>
  <li class="list-group-item">office number</li>
</ul>
</div> */}



module.exports = templateData => {
    // destructure page data by section
    const { manager } = templateData;
    // console.log(templateData.manager.name);
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main id="container" class="container">
      <div class="row">
      <div class="team-members col">

      ${manager.name}

      
      </div>
      </div>
      </main>
    </body>
    </html>
    `;
  };