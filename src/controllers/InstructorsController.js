const knex = require('../databases/knex');
const fieldValidator = require('../utils/FieldValidator');

exports.create = async (req, res) => {
  try {
    const invalidFields = fieldValidator(req.body, ['fullName', 'avatarUrl']);

    if (invalidFields.length) {
      return res.status(400).send({
        status: 'invalid request',
        invalidFields
      });
    }

    const [instructorId] = await knex.insert(req.body).into('instructors');
    
    const [instructorCreated] = await knex.select('*')
      .from('instructors').where({ id: instructorId });
      
    return res.status(200).send({
      status: 'success',
      data: instructorCreated
    })
  } catch (e) {
    return res.status(500).send({ error: e.message || e });
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const newInstructor = req.body;

    const instructor = await knex
      .select('*')
      .from('instructors')
      .where({ id })
      .first();

      delete lesson.instructorId;
      delete lesson.courseId;
  
      delete instructor.id;
      
    if (!instructor) {
      return res.status(404).send({
        status: `Nenhum professor com o id ${id} foi encontrado`
      });
    }

    await knex
      .update(newInstructor)
      .from('instructors')
      .where({ id });

    const instructorUpdated = await knex
      .select('*')
      .from('instructors')
      .where({ id })
      .first();

    return res.status(200).send(instructorUpdated);
  } catch (e) {
    return res.status(500).send({ error: e.message || e });
  }
}