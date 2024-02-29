import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './schemas/company.schema';
import { Model } from 'mongoose';
import { CreateCompanyDTO } from 'src/company/dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  /**Find all companies */
  findAll() {
    return this.companyModel.find().exec();
  }

  /**Find Company by Id */
  findById(id: string) {
    return this.companyModel.findById(id).exec();
  }

  /** Create company */
  create(companyData: CreateCompanyDTO) {
    const newCompany = new this.companyModel(companyData);
    return newCompany.save();
  }

  /**Update Company */
  update(id: string, companyData: UpdateCompanyDTO) {
    return this.companyModel
      .findByIdAndUpdate(id, companyData, {
        new: true,
      })
      .exec();
  }

  /**Delete Company */
  delete(id: string) {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}
