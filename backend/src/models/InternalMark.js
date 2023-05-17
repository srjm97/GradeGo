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
            required: false,
          },
          dateOfExam: {
            type: Date,
            required: false,
          },
          marksScored: {
            type: Number,
            required: false,
          },
          maxMarks: {
            type: Number,
            required: false,
          },
          coMapping: [
            {
              coNo: {
                type: String,
                required: false,
              },
              qns: [
                {
                  qno: {
                    type: Number,
                    required: false,
                  },
                  marksScored: {
                    type: Number,
                    required: false,
                  },
                  maxMarks: {
                    type: Number,
                    required: false,
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
            required: false,
          },
          marksScored: {
            type: Number,
            required: false,
          },
          maxMarks: {
            type: Number,
            required: false,
          },
        },
      ],
      assignmentExamMarks: {
        type: Number,
        required: false,
      },
      attendance: [
        {
          date: {
            type: Date,
            required: false,
          },
          hour: {
            type: Number,
            required: false,
          },
          isPresent: {
            type: Boolean,
            required: false,
          },
        },
      ],
      attendancePercentage: {
        type: Number,
        required: false,
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
