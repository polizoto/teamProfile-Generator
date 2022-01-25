// Card Function

const generateManager = employeeInfo => {
return `<div class="card shadow p-3 mb-5 bg-white rounded">
<div class="card-body bg-primary">
<h2 class="card-title">${employeeInfo.name}</h2>
<p class="card-text"><i class="fa fa-coffee" aria-hidden="true"></i> Manager</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${employeeInfo.id}</li>
<li class="list-group-item">Email: <a href="mailto:${employeeInfo.email}">${employeeInfo.email}</a></li>
<li class="list-group-item">Office number: ${employeeInfo.office}</li>
</ul>
</div>`;
};

const generateEngineer = employeeInfo => {
return `
${employeeInfo
.map(({ name, id, email, github }) => {
return `<div class="card shadow p-3 mb-5 bg-white rounded">
<div class="card-body bg-primary">
<h2 class="card-title">${name}</h2>
<p class="card-text"><i class="fas fa-laptop-code"></i> Engineer</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${id}</li>
<li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
<li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
</ul>
</div>`;
})
.join('')}
`;  
};

const generateIntern = employeeInfo => {
return `
${employeeInfo
.map(({ name, id, email, school }) => {
return `<div class="card shadow p-3 mb-5 bg-white rounded">
<div class="card-body bg-primary">
<h2 class="card-title">${name}</h2>
<p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${id}</li>
<li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
<li class="list-group-item">School: ${school}</li>
</ul>
</div>`;
})
.join('')}
`;  
};

module.exports = templateData => {
    // destructure page data by section
    const { manager, engineers, interns } = templateData;
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
          <h1 class="page-title text-white bg-dark py-5 px-4">My Team</h1>
        </div>
      </header>
      <main id="container" class="container">
      <div class="row">
      <div class="team-members">
      ${generateManager(manager)}${generateEngineer(engineers)}${generateIntern(interns)}
      </div>
      </div>
      </main>
    </body>
    </html>
    `;
  };