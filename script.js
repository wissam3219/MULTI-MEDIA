// مثال بسيط لتوليد محتوى ذكاء صناعي داخل الموقع
document.getElementById('generate-btn').addEventListener('click', () => {
  const aiOutput = document.getElementById('ai-output');
  aiOutput.innerHTML = `
    <div class="card" style="margin-top:20px;">
      <h3>🤖 مثال مولد آليًا</h3>
      <p>هذا النص تم توليده بواسطة أداة ذكاء اصطناعي، ويمكنك استبداله بمخرجات حقيقية لاحقًا.</p>
    </div>
  `;
});
