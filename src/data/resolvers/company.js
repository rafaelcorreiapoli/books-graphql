/**
 * Company resolver
 */
export default {
  Company: {
    authors(company, args, { Company }) {
      return new Promise((resolve, reject) => {
        Company.findById(company._id)
          .populate('authors')
          .exec((err, foundCompany) => {
            if (err) return reject(err)
            return resolve(foundCompany.authors)
          })
      })
    },
  },
}
