//Internal marks of only theory subjects . practical marks have to be completed
const mongoose = require('mongoose');

const InternalMarkSchema = new mongoose.Schema({
  //_id represents the studentId
  _id: {
    type: String,
    required: true,
  },
  courseAssessmentTheory: [
    {
      courseCode: {
        type: String,
        required: true,
      },
      internalExams: [
        {
          nameOfExam: {
            type: String,
            required: true,
          },
          dateOfExam: {
            type: Date,
            required: true,
          },
          marksScored: {
            type: Number,
            required: true,
          },
          maxMarks: {
            type: Number,
            required: true,
          },
          coMapping: [
            {
              coNo: {
                type: String,
                required: true,
              },
              qns: [
                {
                  qno: {
                    type: Number,
                    required: true,
                  },
                  marksScored: {
                    type: Number,
                    required: true,
                  },
                  maxMarks: {
                    type: Number,
                    required: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      internalExamMarks: {
        type: Number,
        required: false,
      },
      assignments: [
        {
          nameOfAssignment: {
            type: String,
            required: true,
          },
          marksScored: {
            type: Number,
            required: true,
          },
          maxMarks: {
            type: Number,
            required: true,
          },
        },
      ],
      assignmentExamMarks: {
        type: Number,
        required: true,
      },
      attendance: [
        {
          date: {
            type: Date,
            required: true,
          },
          hour: {
            type: Number,
            required: true,
          },
          isPresent: {
            type: Boolean,
            required: true,
          },
        },
      ],
      attendancePercentage: {
        type: Number,
        required: true,
      },
      attendanceMarks: {
        type: Number,
        required: false,
      },
      totalInternalMarks: {
        type: Number,
        required: false,
      },
    },
  ],
});

module.exports = new mongoose.model('InternalMark', InternalMarkSchema);
