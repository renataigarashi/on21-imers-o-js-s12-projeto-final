class Organizations {
  constructor() {
    this.organizations = []
  }

  addOrganizations(organization) {
    return this.organizations.push(organization)
  }

  sortOrganization(ordenation, a, b) {
    if(ordenation == 'asc'){
      return this.organizations.sort((a, b) => parseFloat(a.points) - parseFloat(b.points));
    } else {
      return this.organizations.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
    }
  }

  getOrganization(organizationName) {
    const getOrganization = this.organizations.find(organization => organization.name == organizationName)
    if(getOrganization) {
      return getOrganization
    } else {
      return `Organization not found!`
    }
  }
}

module.exports = { Organizations }