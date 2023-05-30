// http://localhost:4010/api/hello

export default function handler(req, res) {
  res.status(200).json({ name: 'タロウ' })
}
