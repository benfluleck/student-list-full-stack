import Joi from 'joi'

const name = Joi.string().max(254).required().label('Name')

const firstname = Joi.string().max(254).required().label('Firstname')
const lastname = Joi.string().max(254).required().label('Lastname')

const birthdate = Joi.number().required().label('Birthdate')
const photoUrl = Joi.string().uri().label('PhotoUrl')

const id = Joi.string().required().uuid().label('Id')

const hobbies = Joi.array().min(1).max(100).unique().items(
  Joi.string().uuid().label('Hobby Id')
).label('Hobbies')

export const validateId = Joi.object().keys({
  id
})

export const validateName = Joi.object().keys({
  name
})

export const validateHobby = Joi.object().keys({
  id,
  name
})

export const validateStudentFields = Joi.object().keys({
  firstname,
  lastname,
  birthdate,
  photoUrl,
  hobbies
})
