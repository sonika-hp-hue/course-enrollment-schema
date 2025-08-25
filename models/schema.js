const mongoose = require('mongoose');

// ================= Student Schema =================
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Student’s full name is required
  },
  email: {
    type: String,
    required: true, // For login and communication
    unique: true,  // Must be unique
  },
  enrollmentDate: {
    type: Date,
    default: Date.now, // Current date by default
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course', // Reference to Course schema
    },
  ],
});

// ================= Course Schema =================
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Course title required
  },
  description: {
    type: String, // Short course description
  },
  durationWeeks: {
    type: Number,
    required: true, // Course length in weeks required
  },
  instructor: {
    type: String,
    required: true, // Instructor name required
  },
});

// Export models
const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { Student, Course };
